import { Component, ElementRef, OnInit, Pipe, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import * as moment from 'moment';
// import { document } from 'ngx-bootstrap-custome/utils/facade/browser';
import 'rxjs/Rx';
import { role } from '../../../model/role_features';
import { StudentForm } from '../../../model/student-add-form';
import { StudentFeeStructure } from '../../../model/student-fee-structure';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../services/common-service';
import { CourseListService } from '../../../services/course-services/course-list.service';
import { FetchprefilldataService } from '../../../services/fetchprefilldata.service';
import { HttpService } from '../../../services/http.service';
import { MessageShowService } from '../../../services/message-show.service';
import { AddStudentPrefillService } from '../../../services/student-services/add-student-prefill.service';
import { FetchStudentService } from '../../../services/student-services/fetch-student.service';
import { PostStudentDataService } from '../../../services/student-services/post-student-data.service';
import { FeeModel, StudentFeeService } from '../student_fee.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit, OnDestroy {


  /* Local Variable and scope declaration */
  /* ========================================================================================================== */
  @ViewChild('saveAndContinue', { static: false }) btnSaveAndContinue: ElementRef;
  @ViewChild('btnPayment', { static: false }) btnPayment: ElementRef;
  allocatedItem: any = [];
  newPdcArr: any[] = [];
  pdcStatus: any[] = [{ data_key: '1', data_value: 'Pending' }, { data_key: '2', data_value: 'dishonoured' }];
  chequePdcList: any[] = [];
  savedAssignedBatch: any[] = [];
  instituteList: any[] = [];
  standardList: any[] = [];
  courseList: any[] = [];
  batchList: any[] = [];
  slots: any[] = [];
  langStatus: any[] = [];
  selectedSlots: any[] = [];
  customComponents: any[] = [];
  slotIdArr: any[] = [];
  uploadedFiles: any[] = [];
  school: any[] = [];
  userCustommizedFee: any[] = [];
  otherFeeType: any[] = [];
  // feeTemplateStore: any[] = []; // commented by laxmi 21-02-20
  // isConfigureFees: boolean = false;
  inventoryItemsArr: any[] = [];
  academicYear: any[] = [];
  enquiryCustomComp: any[] = [];
  subjectWiseInstallmentArray: any = [];
  pdcSelectedForPayment: any;
  institute_enquiry_id: any;
  defaultAcadYear: any = -1;
  isPdcFeePaymentSelected: boolean = false;
  closeFee: boolean;
  studentAddnMove: boolean;
  isPdcApply: boolean = false;
  formIsActive: boolean = true;
  quickAddStudent: boolean = false;
  additionalBasicDetails: boolean = false;
  isAssignBatch: boolean = false;
  isProfessional: boolean = false;
  multiOpt: boolean = false;
  isDuplicateStudent: boolean = false;
  genPdcAck: boolean = false;
  sendPdcAck: boolean = false;
  isConvertEnquiry: boolean = false;
  isNewInstitute: boolean = true;
  isNewInstituteEditor: boolean = false;
  assignedBatch: string = "";
  selectedSlotsString: string = '';
  selectedSlotsID: string = '';
  assignedBatchString: string = '';
  userImageEncoded: string = '';
  feeTempSelected: any = "";
  removeImage: boolean = false;
  isBasicActive: boolean = true;
  isOtherActive: boolean = false;
  isFeeActive: boolean = false;
  isInventoryActive: boolean = false;
  isDiscountApplied: boolean = false;
  reverse: boolean = false;
  isPaymentPdc: boolean = false;
  isDefineFees: boolean = false;
  isNewInstallment: boolean = false;
  isDiscountApply: boolean = false;
  isUpdateFeeAndExit: boolean = false;
  isPartialPayHistory: boolean = false;
  isManualDisplayId: boolean = false;
  isShareDetails: boolean = false;
  alertBox: boolean = true;
  createDuplicateStudent: boolean = false;
  retrieveOldStudent: boolean = true;
  taxEnableCheck: any = '1';
  discountReason: string = '';
  key: string = 'name';
  containerWidth: any = "200px";
  studentImage: string = '';
  student_id: any = 0;
  paymentMode: number = 0;
  service_tax: number = 0;
  is_undo: string = "N";
  enquiryData: any = [];
  maxlegth: any = 10;
  feeStructureForm: any = {
    studentArray: ["-1"],
    template_effective_date: moment().format('YYYY-MM-DD')
  };
  createInstitute = {
    instituteName: "",
    isActive: "Y"
  };
  allocationForm: any = {
    alloted_units: "",
    item_id: "",
    student_id: 0,
    institution_id: sessionStorage.getItem('institute_id')
  };

  feeTemplateById: StudentFeeStructure = {
    feeTypeMap: "",
    customFeeSchedules: [],
    registeredServiceTax: "",
    toCreate: "",
    studentArray: "",
    studentwise_total_fees_amount: "",
    studentwise_total_fees_balance_amount: "",
    studentwise_total_fees_amount_paid: "",
    studentwise_total_fees_discount: "",
    studentwise_fees_tax_applicable: "",
    no_of_installments: "",
    discount_fee_reason: "",
    template_name: "",
    template_id: "",
    template_effective_date: "",
    is_fee_schedule_created: "",
    is_fee_tx_done: "",
    is_undo: "",
    is_fee_other_inst_created: "",
    is_delete_other_fee_types: "",
    chequeDetailsJson: "",
    payment_mode: "",
    remarks: "",
    paid_date: "",
    is_cheque_details_required: "",
    reference_no: "",
    invoice_no: "",
    uiSelected: false
  };
  studentFeeReportObj: any = {
    due_date: null,
    fee_schedule_id: 0,
    paid_full: "Y",
    previous_balance_amt: "",
    total_amt_paid: ""
  };
  enableBiometric: any;
  courseDropdown: any = null;
  countryDetails: any = [{}];
  addInventory: any = {
    alloted_units: 0,
    item_id: -1,
    available_units: '',
    date_of_dispatch: '',
    name_of_courier_service: '',
    docket_id: '',
    date_of_delivery_of_sm: '',
  };
  pdcSearchObj = {
    cheque_status: '-1',
    student_id: '',
    cheque_date_from: '',
    cheque_date_to: ''
  };
  studentAddFormData: StudentForm = {
    student_name: "",
    student_sex: "",
    student_email: "",
    student_phone: "",
    country_id: "",
    state_id: "",
    city_id: "",
    area_id: "",
    student_curr_addr: "",
    dob: "",
    doj: moment().format('YYYY-MM-DD'),
    school_name: "-1",
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    guardian_name: "",
    guardian_email: "",
    guardian_phone: "",
    is_active: "Y",
    expiry_date: '',
    institution_id: sessionStorage.getItem('institute_id'),
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
    archivedStudent: false,
    studentFileUploadJson: [],
    assigned_to_id: "0",
    optional_subject_id: []
  };

  enqAssignTo: any = [];

  checkBoxGroup: any = {
    unpaidInstallment: true,
    paidInstallment: false,
    feeDiscouting: false,
    manageCheque: false,
    showFeeSection: false,
    hideReconfigure: false,
  };

  // New Function For Discounting
  cardAmountObject: any = {
    feeAmountInclTax: 0,
    feeAmountExclTax: 0,
    taxAmount: 0,
    discountAmount: 0,
    amountPaid: 0,
    amountDue: 0,
    additionalFees: 0
  };

  paymentPopUpJson: any = {
    immutableAmount: 0,
    payingAmount: 0,
    paid_date: moment().format('YYYY-MM-DD'),
    payment_mode: 'Cash',
    reference_no: '',
    remarks: "",
    selectedPdcId: '',
    pdcSelectedForm: {
      bank_name: '',
      cheque_amount: 0,
      cheque_date: moment().format("YYYY-MM-DD"),
      cheque_no: '',
      pdc_cheque_id: ''
    },
    genPdcAck: false,
    sendPdcAck: false
  };

  pdcAddForm: any = {
    bank_name: '',
    cheque_amount: '',
    cheque_date: '',
    cheque_id: 0,
    cheque_no: '',
    cheque_status: '',
    cheque_status_key: 0,
    clearing_date: '',
    institution_id: sessionStorage.getItem('institute_id'),
    student_id: 0,
    country_id: ''
  };
  assignTo: boolean = true;
  feeObject: FeeModel;
  tableHeaderCheckbox: boolean = false;
  isFeePaymentUpdate: boolean = false;
  clonedFeeObject: FeeModel;
  convertInstituteEnquiryId: any = '';
  totalAmountToPay: number = 0;
  instituteCountryDetObj: any = {};
  checkStatusofStudent: boolean = false;
  country_id: number = null;
  category_id: number | string = "";
  selectedFiles: any[] = [];
  tax_type_without_percentage: String;
  isTaxEnable: boolean = false;

  isRippleLoad: boolean = false;
  // state and city list
  addArea: boolean = false;
  stateList: any[] = [];
  cityList: any[] = [];
  areaList: any[] = [];
  selectedData = {
    country: '',
    state: '',
    city: ''
  };
  Payment_Modes: any = [];
  role_feature = role.features;
  schoolModel: boolean = false;

  constructor(
    private studentPrefillService: AddStudentPrefillService,
    private prefill: FetchprefilldataService,
    private postService: PostStudentDataService,
    private fetchService: FetchStudentService,
    private router: Router,
    private auth: AuthenticatorService,
    private commonServiceFactory: CommonServiceFactory,
    private feeService: StudentFeeService,
    private apiService: CourseListService,
    private msgToast: MessageShowService,
    private httpService: HttpService
  ) {
    this.getInstType();
    this.getSettings();
    this.taxEnableCheck = sessionStorage.getItem('enable_tax_applicable_fee_installments');
  }
  /* ========================================================================================================== */
  /* OnInit Lifecycle Hook */

  ngOnInit() {
    this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
    this.auth.showLoader();
    this.tax_type_without_percentage = sessionStorage.getItem("tax_type_without_percentage");
    this.isTaxEnable = sessionStorage.getItem('enable_tax_applicable_fee_installments') == "1" ? true : false;

    this.fetchPrefillFormData();

    if (sessionStorage.getItem('studentPrefill') != null && sessionStorage.getItem('studentPrefill') != undefined) {
      this.convertToStudentDetected();
      this.checkStatusofStudent = false;
    } else {
      this.checkStatusofStudent = true;
    }

    if (this.isProfessional) {
      this.updateBatchList();
    }
    else if (!this.isProfessional && !this.schoolModel) {
      this.studentAddFormData.standard_id = (!!this.studentAddFormData.standard_id) ? this.studentAddFormData.standard_id : -1;
      this.updateMasterCourseList(this.studentAddFormData.standard_id);
    }

    if (sessionStorage.getItem('permissions')) {
      let permissions = JSON.parse(sessionStorage.getItem('permissions'));
      if (this.role_feature.FEE_MENU) { //fee reconfiguration
        this.checkBoxGroup.showFeeSection = true;
        this.checkBoxGroup.hideReconfigure = true;
      }
      if (!this.role_feature.FEE_MENU) {//1.	Fee Payment for Past Dates
        this.checkBoxGroup.showFeeSection = false;
      }
      if (this.role_feature.FEE_MENU) { //1.	Fee discount
        this.checkBoxGroup.feeDiscouting = true;
      }
      if (this.role_feature.FEE_CHEQUE_MANAGE) { //update payment and manage cheque,pdc
        this.checkBoxGroup.manageCheque = true;
        this.checkBoxGroup.showFeeSection = false;
      }
    }

    if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == ''
      || sessionStorage.getItem('username') == 'admin') {
      this.checkBoxGroup.feeDiscouting = true;
      this.checkBoxGroup.showFeeSection = true;
      this.checkBoxGroup.manageCheque = true;
      this.checkBoxGroup.hideReconfigure = true;
    }
    if ((sessionStorage.getItem('userType') == '0') && (sessionStorage.getItem('username') != 'admin') && (sessionStorage.getItem('enable_assign_to_feature') == '0')) {
      this.assignTo = false;
    }
    this.fetchDataForCountryDetails();
    this.getStateList();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('studentPrefill');
  }


  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      let defacult_Country = this.countryDetails.filter((country) => {
        return country.is_default == 'Y';
      })

      if (this.studentAddFormData.country_id == "") {
        this.studentAddFormData.country_id = defacult_Country[0].id;
        this.instituteCountryDetObj = defacult_Country[0];
        if (this.checkStatusofStudent == true) { // when enquiry is convert to student it  false else true
          this.country_id = defacult_Country[0].id;
          this.maxlegth = defacult_Country[0].country_phone_number_length;
        }
      }

    }
  }

  getStateList() {
    if (this.checkStatusofStudent) {
      this.stateList = [];
      this.cityList = [];
      this.areaList = [];
      this.studentAddFormData.state_id = "";
      this.studentAddFormData.city_id = "";
      this.studentAddFormData.area_id = "";
    }
    if (this.studentAddFormData.country_id != "") {
      const url = `/api/v1/country/state?country_ids=${this.studentAddFormData.country_id}`
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.statusCode == 200) {
            if (res.result && res.result.length > 0) {
              this.stateList = res.result[0].stateList;
            }
            if (!this.checkStatusofStudent) {
              this.getCityList();
            }
          }
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
        }
      )
    }
  }

  // get city list as per state selection
  getCityList() {
    if (this.checkStatusofStudent) {
      this.cityList = [];
      this.areaList = [];
      this.studentAddFormData.city_id = "";
      this.studentAddFormData.area_id = "";
    }
    if (!!this.studentAddFormData.state_id && this.studentAddFormData.state_id != "") {
      const url = `/api/v1/country/city?state_ids=${this.studentAddFormData.state_id}`
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.statusCode == 200) {
            if (res && res.result && res.result.length > 0) {
              this.cityList = res.result[0].cityList;
            }
            if (!this.checkStatusofStudent) {
              this.getAreaList();
            }
          }
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
        }
      )
    }
  }

  getAreaList() {
    if (this.checkStatusofStudent) {
      this.areaList = [];
    }
    if (this.studentAddFormData.city_id != "-1" && this.studentAddFormData.city_id != "" && this.studentAddFormData.city_id!=null) {
      const url = `/api/v1/cityArea/area/${this.pdcAddForm.institution_id}?city_ids=${this.studentAddFormData.city_id}`
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.statusCode == 200 && res.result && res.result.length > 0) {
            this.areaList = res.result[0].areaList;
          }
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
        }
      )
    }
  }

  onChangeObj(event) {
    this.fetchDataForCountryDetails();
    this.countryDetails.forEach(element => {
      if (element.id == event) {
        console.log(element.id);
        this.studentAddFormData.country_id = element.id;
        this.instituteCountryDetObj = element;
        this.maxlegth = this.instituteCountryDetObj.country_phone_number_length;
        this.country_id = this.instituteCountryDetObj.id;
      }
    });
    this.getStateList();
  }

  toggleAddArea() {
    if (this.addArea) {
      this.addArea = false;
    }
    else {
      this.addArea = true;
      this.selectedData.country = this.studentAddFormData.country_id;
      this.selectedData.state = this.studentAddFormData.state_id;
      this.selectedData.city = this.studentAddFormData.city_id;
    }
  }



  /* ========================================================================================================== */
  /* ===================================== Data Prefill Method and General Methods ============================ */
  /* ========================================================================================================== */
  updateBatchList() {
    this.auth.showLoader();
    this.studentPrefillService.fetchBatchDetails().subscribe(data => {
      console.log('updateBatchList' + this.batchList.length);
      this.auth.hideLoader();
      this.batchList = [];
      data.forEach(el => {
        if (el.feeTemplateList != null && el.feeTemplateList.length != 0 && el.selected_fee_template_id == -1) {
          el.feeTemplateList.forEach(e => {
            if (e.is_default == 1) {
              el.selected_fee_template_id = e.template_id;
            }
          })
        }
        if (el.academic_year_id == '-1') {
          el.academic_year_id = this.defaultAcadYear;
        }
        el.optional_subject_id = '';
        let obj = { isSelected: false, data: el, assignDate: moment().format('YYYY-MM-DD') };
        this.batchList.push(obj);
      });
    });
  }

  getInstType() {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true; // batch module
        } else {
          this.isProfessional = false; // batch module
        }
      }
    )
    // changes by Nalini - to handle school model conditions
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
  }


  updateMasterCourseList(id) {
    this.batchList = [];
    this.auth.showLoader();
    this.studentPrefillService.fetchCourseMasterById(id).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        if (data.coursesList != null && data.coursesList.length > 0) {
          data.coursesList.forEach(el => {
            if (el.feeTemplateList != null && el.feeTemplateList.length != 0 && el.selected_fee_template_id == -1) {
              el.feeTemplateList.forEach(e => {
                if (e.is_default == 1) {
                  el.selected_fee_template_id = e.template_id;
                }
              })
            }
            if (el.academic_year_id == '-1') {
              el.academic_year_id = this.defaultAcadYear;
            }
            let obj = { isSelected: false, data: el, assignDate: moment().format('YYYY-MM-DD') };
            this.batchList.push(obj);
          });
        }
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('info', '', 'No course assigned for standard');
      });
  }


  //get all selected studnet fee installment
  studentFeeInstallment(userType) {
    let object = {
      student_ids: this.student_id,// string by ids common seperated
      institution_id: '',
      sendEmail: userType
    }

    if (userType == 1) {
      object['user_role'] = this.paymentMode;
    }
    this.auth.showLoader();
    this.postService.getFeeInstallments(object).subscribe((res: any) => {
      this.auth.hideLoader();
      if (userType == -1) {
        let byteArr = this.commonServiceFactory.convertBase64ToArray(res.document);
        let fileName = res.docTitle;
        let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
        let url = URL.createObjectURL(file);
        let dwldLink = document.getElementById('hiddenAnchorTag2');
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName);
        document.body.appendChild(dwldLink);
        dwldLink.click();
      } else {
        this.isShareDetails = false;
        this.msgToast.showErrorMessage('success', '', 'Email sent successfully');
      }
    },
      (err: any) => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      })
  }

  /* Function to navigate through the Student Add Form on button Click Save/Submit*/
  navigateTo(text) {
    switch (text) {
      case 'studentForm': {
        if (this.student_id == 0 || this.student_id == null) {
          document.getElementById('li-one').classList.add('active');
          document.getElementById('li-two').classList.remove('active');
          document.getElementById('li-three').classList.remove('active');
          document.getElementById('li-four').classList.remove('active');
          this.isBasicActive = true;
          this.isOtherActive = false;
          this.isFeeActive = false;
          this.isInventoryActive = false;
        }
        else {
          this.msgToast.showErrorMessage('info', '', 'Student Details Already Saved');
        }
        break;
      }
      case 'kyc': {
        if (this.student_id == 0 || this.student_id == null) {
          document.getElementById('li-one').classList.remove('active');
          document.getElementById('li-two').classList.add('active');
          document.getElementById('li-three').classList.remove('active');
          document.getElementById('li-four').classList.remove('active');
          this.isBasicActive = false;
          this.isOtherActive = true;
          this.isFeeActive = false;
          this.isInventoryActive = false;
          this.fetchCustomComponents();
        }
        else {
          this.msgToast.showErrorMessage('info', '', 'Student Details Already Saved');
        }
        break;
      }
      case 'feeDetails': {
        if (this.student_id != 0 && this.student_id != null) {
          document.getElementById('li-one').classList.remove('active');
          document.getElementById('li-two').classList.remove('active');
          document.getElementById('li-three').classList.add('active');
          document.getElementById('li-four').classList.remove('active');
          this.isBasicActive = false;
          this.isOtherActive = false;
          this.isFeeActive = true;
          this.isInventoryActive = false;
        }
        else {
          this.msgToast.showErrorMessage('info', 'Student Details Not Saved', 'Please save the student details to allocate fee and inventory');
        }
        break;
      }
      case 'inventory': {
        if (this.student_id != 0 && this.student_id != null) {
          document.getElementById('li-one').classList.remove('active');
          document.getElementById('li-two').classList.remove('active');
          document.getElementById('li-three').classList.remove('active');
          document.getElementById('li-four').classList.add('active');
          this.isBasicActive = false;
          this.isOtherActive = false;
          this.isFeeActive = false;
          this.isInventoryActive = true;
          this.fetchInventoryList();
        }
        else {
          this.msgToast.showErrorMessage('info', 'Student Details Not Saved', 'Please save the student details to allocate fee and inventory');
        }
        break;
      }
    }

  }

  getSettings() {
    let mid = sessionStorage.getItem('manual_student_disp_id');
    if (mid == '1') { this.isManualDisplayId = true; };
  }

  /* Function to navigate on icon click */
  switchToView(id) {
    switch (id) {
      case "studentForm-icon": {
        this.navigateTo("studentForm");
        break;
      }
      case "kyc-icon": {
        this.navigateTo("kyc");
        break;
      }
      case "feeDetails-icon": {
        this.navigateTo("feeDetails");
        break;
      }
      case "inventory-icon": {
        this.navigateTo("inventory");
        break;
      }
      default: {
        this.navigateTo("studentForm");
        break;
      }
    }
  }

  /* Fetch and store the prefill data to be displayed on dropdown menu */
  fetchPrefillFormData() {
    this.auth.showLoader();

    this.prefill.getSchoolDetails().subscribe(
      data => { this.instituteList = data; },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    );

    // this.studentPrefillService.fetchAllFeeStructure().subscribe(
    //   res => {
    //      this.auth.hideLoader();
    //     this.feeTemplateStore = res;
    //   },
    //   err => {
    //      this.auth.hideLoader();
    //   }
    // )

    this.prefill.getEnqStardards().subscribe(
      data => { this.standardList = data; },
      err => {
        this.msgToast.showErrorMessage('error', '', err.error.message);
      });

    // this.studentPrefillService.getChequeStatus().subscribe(
    //   data => { this.pdcStatus = data; },
    //   err => {
    //     this.auth.hideLoader();
    //     this.msgToast.showErrorMessage('error', '', err.error.message);
    //   }
    // );
    this.auth.showLoader();
    this.prefill.getAllFinancialYear().subscribe(
      (data: any) => {
        this.academicYear = data;
        this.academicYear.forEach(e => {
          if (e.default_academic_year == 1) {
            this.defaultAcadYear = e.inst_acad_year_id;
          }
        });
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    )

    this.prefill.getAssignTo().subscribe(
      data => { this.enqAssignTo = data; },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    );

    this.getSlots();
    this.getlangStudentStatus();
  }

  fetchCustomComponents() {
    this.customComponents = [];
    this.auth.showLoader();
    this.studentPrefillService.fetchCustomComponentById(0, this.convertInstituteEnquiryId, 2).subscribe(
      data => {
        this.auth.hideLoader();
        if (data != null) {
          data.forEach(el => {
            let obj = { data: el, id: el.component_id, is_required: el.is_required, is_searchable: el.is_searchable, label: el.label, prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')), selected: [], selectedString: '', type: el.type, value: el.enq_custom_value };
            if (el.type == 4) {
              obj = { data: el, id: el.component_id, is_required: el.is_required, is_searchable: el.is_searchable, label: el.label, prefilled_data: this.createPrefilledDataType4(el.prefilled_data.split(','), el.enq_custom_value.split(','), el.defaultValue.split(',')), selected: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? this.getDefaultArr(el.defaultValue) : el.enq_custom_value.split(','), selectedString: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value, type: el.type, value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value };
            }
            if (el.type == 3) {
              obj = { data: el, id: el.component_id, is_required: el.is_required, is_searchable: el.is_searchable, label: el.label, prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')), selected: [], selectedString: "", type: el.type, value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value };
            }
            if (el.type == 2) {
              obj = { data: el, id: el.component_id, is_required: el.is_required, is_searchable: el.is_searchable, label: el.label, prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')), selected: [], selectedString: '', type: el.type, value: el.enq_custom_value == "" ? false : true, };
            }
            else if (el.type != 2 && el.type != 4 && el.type != 3) {
              obj = { data: el, id: el.component_id, is_required: el.is_required, is_searchable: el.is_searchable, label: el.label, prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')), selected: [], selectedString: '', type: el.type, value: el.enq_custom_value };
            }
            this.customComponents.push(obj);
          });
        }
        if (sessionStorage.getItem('studentPrefill') != null && sessionStorage.getItem('studentPrefill') != undefined) {
          this.fetchEnquiryCustomComponentDetails();
        }
        this.auth.hideLoader();
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    );

  }


  getDefaultArr(d): any[] {
    let a: any[] = [];
    a.push(d);
    return a;
  }

  createPrefilledDataType4(dataArr: any[], selected: any[], def: any[]): any[] {
    let customPrefilled: any[] = [];
    if (selected.length != 0 && selected[0] != "") {
      dataArr.forEach(el => {
        let obj = {
          data: el,
          checked: selected.includes(el)
        }
        customPrefilled.push(obj);
      });
    }
    else {
      dataArr.forEach(el => {
        let obj = {
          data: el,
          checked: def.indexOf(el) != -1
        }
        customPrefilled.push(obj);
      });
    }
    return customPrefilled;
  }

  createPrefilledData(dataArr: any[]): any[] {
    let customPrefilled: any[] = [];
    dataArr.forEach(el => {
      let obj = {
        data: el.toString(),
        checked: false
      }
      customPrefilled.push(obj);
    });

    return customPrefilled;
  }

  /* Function to show/hide Addition Details Form section */
  toggleAdditionalBasicDetails() {
    this.additionalBasicDetails = !this.additionalBasicDetails;
  }

  /* Open batch assign popup */
  openAssignBatch() {
    this.isAssignBatch = true;
  }

  /* close batch assign popup */
  closeBatchAssign() {
    /* batch has been already selected */
    if (this.studentAddFormData.assignedBatches != null && this.studentAddFormData.assignedBatches.length != 0) {
      for (let i in this.batchList) {
        this.batchList[i].isSelected = false;
        if (this.isProfessional) {
          /* course has been assigned */
          if (this.studentAddFormData.assignedBatches.includes(this.batchList[i].data.batch_id.toString())) {
            this.batchList[i].isSelected = true;
          }
        }
        else {
          /* course has been assigned */
          if (this.studentAddFormData.assignedBatches.includes(this.batchList[i].data.course_id.toString())) {
            this.batchList[i].isSelected = true;
          }
        }
      }
      this.isAssignBatch = false;
    }
    else if (this.studentAddFormData.assignedBatches == null || this.studentAddFormData.assignedBatches.length == 0) {
      for (let i in this.batchList) {
        this.batchList[i].isSelected = false;
      }
      this.isAssignBatch = false;
    }
  }

  /* align the user selected batch into input and update the data into array to be updated to server */
  getassignedBatchList(e) {
    let temp = [];
    if(e.batchJoiningDates && e.batchJoiningDates.length) {
      e.batchJoiningDates.forEach(el => {
            temp.push(moment(el).format('YYYY-MM-DD'));
      });
    }
    this.studentAddFormData.assignedBatches = e.assignedBatches;
    this.studentAddFormData.batchJoiningDates = temp;
    this.studentAddFormData.assignedBatchescademicYearArray = e.assignedBatchescademicYearArray;
    this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray = e.assignedCourse_Subject_FeeTemplateArray;
    this.studentAddFormData.deleteCourse_SubjectUnPaidFeeSchedules = false;
    this.assignedBatchString = e.assignedBatchString;
    this.isAssignBatch = e.isAssignBatch;
    this.studentAddFormData.optional_subject_id = e.optional_subject_id;
  }

  getSlots() {
    this.slots = [];
    this.auth.showLoader();
    return this.studentPrefillService.fetchSlots().subscribe(
      res => {
        res.forEach(el => {
          let obj = {
            label: el.slot_name,
            value: el,
            status: false
          }
          this.slots.push(obj);
        });
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  getlangStudentStatus() {
    this.auth.showLoader();
    return this.studentPrefillService.fetchLangStudentStatus().subscribe(
      res => {
        this.langStatus = res;
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  multiselectVisible(elid) {
    let targetid = elid + "multi";
    if (elid != null && elid != '') {
      if (document.getElementById(targetid).classList.contains('hide')) {
        document.getElementById(targetid).classList.remove('hide');
      }
      else {
        document.getElementById(targetid).classList.add('hide');
      }
    }
  }

  updateSlotSelected(data) {
    /* slot checked */
    if (data.status) {
      this.slotIdArr.push(data.value.slot_id);
      this.selectedSlots.push(data.value.slot_name);
      if (document.getElementById('slotwrapper') && this.selectedSlots.length != 0) {
        document.getElementById('slotwrapper').classList.add('has-value');
      }
      else if (document.getElementById('slotwrapper')) {
        document.getElementById('slotwrapper').classList.remove('has-value');
      }
      this.selectedSlotsID = this.slotIdArr.join(',');
      this.selectedSlotsString = this.selectedSlots.join(',');
    }
    /* slot unchecked */
    else {
      if (document.getElementById('slotwrapper') && this.selectedSlots.length != 0) {
        document.getElementById('slotwrapper').classList.add('has-value');
      }
      else if (document.getElementById('slotwrapper') && this.selectedSlots.length == 0) {
        document.getElementById('slotwrapper').classList.remove('has-value');
      }
      var index = this.selectedSlots.indexOf(data.value.slot_name);
      if (index > -1) {
        this.selectedSlots.splice(index, 1);
      }
      this.selectedSlotsString = this.selectedSlots.join(',');

      var index2 = this.slotIdArr.indexOf(data.value.slot_id);
      if (index2 > -1) {
        this.slotIdArr.splice(index, 1);
      }
      this.selectedSlotsID = this.slotIdArr.join(',');
    }

  }

  updateMultiSelect(data, id) {
    this.customComponents.forEach(el => {
      if (el.id == id) {
        let x = []
        let y = el.prefilled_data;
        y.forEach(e => {
          if (e.checked) {
            x.push(e.data)
          }
        });
        el.selected = x;
        el.selectedString = el.selected.join(',');
        el.value = el.selectedString;
      }
    });
  }


  concatDataWithComma(data) {
    let test = "";
    if (data.length > 0) {
      for (let t = 0; t < data.length; t++) {
        if (data[t] !== "") {
          if (test != "") {
            test = test + "," + data[t];
          } else {
            test = test + data[t];
          }
        }
      }
    }
    return test;
  }



  fetchCourseFromMaster(id) {
    if (id == null || id == '') {
      this.courseList = [];
    }
    else {
      this.studentPrefillService.fetchCourseList(id).subscribe(
        res => {
          this.courseList = res;
        }
      )
    }
  }

  openInstituteAdder() {
    this.isNewInstituteEditor = true;
  }

  closeInstituteAdder() {
    this.isNewInstituteEditor = false;
  }

  /* close add new institute */
  closeAddInstitute() {
    this.isNewInstitute = false;
    document.getElementById('add-institute-icon').innerHTML = '+';
    this.createInstitute.instituteName = '';
  }

  /* function to add institute data to server */
  addInstituteData() {
    if (this.createInstitute.instituteName.trim() != '') {
      if ((this.instituteList.filter(x => x.school_name == this.createInstitute.instituteName.trim())).length == 0) {
        this.prefill.createNewInstitute(this.createInstitute).subscribe(
          el => {
            if (el.message === "OK") {
              this.msgToast.showErrorMessage('success', '', 'Institution added successfully !');
              this.prefill.getSchoolDetails().subscribe(
                data => {
                  this.school = data;
                  this.instituteList = this.school;
                  this.instituteList.forEach(el => {
                    el.edit = false;
                  });
                  this.closeAddInstitute();
                },
                err => {
                  this.msgToast.showErrorMessage('error', '', 'There was an error processing your request');
                }
              );
            }
            else {
              err => {
                this.msgToast.showErrorMessage('error', '', 'There was an error processing your request');
              }
            }
          },
          err => {
            console.log(err)
            this.msgToast.showErrorMessage('error', '', err.error.message);
          });
      } else {
        this.msgToast.showErrorMessage('error', '', 'Institution name already exist!');
      }
    } else {
      this.msgToast.showErrorMessage('info', '', 'Please enter institution name');
    }
  }

  fetchInstituteInfo() {
    this.prefill.getSchoolDetails().subscribe(
      data => {
        this.school = data;
        this.instituteList = this.school;
        this.instituteList.forEach(el => {
          el.edit = false;
        });
      },
    )
  }


  editInstitute(id) {
    this.instituteList.forEach(el => {
      if (el.school_id == id) {
        el.edit = true;
        el.new_school_name = el.school_name;
      }
    });
  }

  cancelEditInstitute(id) {
    let temp = this.instituteList.filter(el => el.school_id == id);
    if (temp) {
      temp[0].edit = false;
      temp[0].new_school_name = temp[0].school_name;
    }
  }

  updateInstitute(id, school_name) {
    if (school_name.trim() != '') {
      this.postService.updateInstituteDetails(id, school_name).subscribe(
        res => {
          this.msgToast.showErrorMessage('success', '', 'Institution name updated successfully!');
          this.fetchInstituteInfo();
        },
        err => {
          this.msgToast.showErrorMessage('error', '', err.error.message);
          this.fetchInstituteInfo();
        }
      )
    } else {
      this.msgToast.showErrorMessage('info', '', 'Please enter institution name');
    }
  }

  deleteInstitute(id) {
    this.postService.deleteInstitute(id).subscribe(
      res => {
        this.msgToast.showErrorMessage('success', '', "Institute record deleted successfully");
        this.fetchInstituteInfo();
      },
      err => {
        this.msgToast.showErrorMessage('error', '', "This institute is already in used, so cannot be deleted");
        this.fetchInstituteInfo();
      }
    )
  }


  /* toggle visibility of new institute form */
  toggleInstituteAdd() {
    let icon = document.getElementById('add-institute-icon').innerHTML;
    if (icon == '+') {
      this.isNewInstitute = true;
      document.getElementById('add-institute-icon').innerHTML = '-';
    }
    else if (icon == '-') {
      this.isNewInstitute = false;
      this.createInstitute.instituteName = '';
      document.getElementById('add-institute-icon').innerHTML = '+';
    }
  }



  setImage(e) {
    //console.log(e);
    this.studentImage = e;
  }

  getCourseDropdown(id) {
    this.fetchService.getStudentCourseDetails(id).subscribe(
      res => {
        this.courseDropdown = res;
      },
      err => {
      }
    )
  }

  /* ========================================== General Methods Ends here ================================================== */
  /* ===================================== Student Admission Methods and Form validation======================= */
  /* Navigate or check for submission */

  addStudentDataAndFetchFee(values: NgForm) {
    this.studentAddnMove = true;
    if (this.isManualDisplayId) {
      if (this.studentAddFormData.student_disp_id.trim() != "") {
        this.studentQuickAdder(values);
      }
      else {
        this.msgToast.showErrorMessage('error', 'Student Roll Number Missing', "Please enter a valid roll number");
      }
    }
    else {
      this.studentQuickAdder(values);
    }
  }

  studentQuickAdder(form: NgForm) {
    /* Both Form are Valid Else there seems to be an error on custom component */
    let isCustomComponentValid: boolean = this.customComponents.every(el => { return this.getCustomValid(el); });
    let formValid: boolean = this.formfullValidator();

    if (isCustomComponentValid && formValid) {
      //console.log("valid student generating Id Now");
      let customArr = [];
      this.customComponents.forEach(el => {
        /* Not Checkbox and value not empty */
        if (el.value != '' && el.type != 2 && el.type != 5) {
          let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: el.value, comp_length: el.data.comp_length, type: el.type, label: el.label };
          customArr.push(obj);
        }
        /* Checkbox Custom Component */
        else if (el.type == 2) {
          if (el.value == "Y" || el.value == true) {
            let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: "Y", comp_length: el.data.comp_length, type: el.type, label: el.label };
            customArr.push(obj);
          }
          else if (el.value == "N" || el.value == false) {
            let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: "N", comp_length: el.data.comp_length, type: el.type, label: el.label };
            customArr.push(obj);
          }
        }
        /* Date Type Custom Component */
        else if (el.type == 5 && el.value != "" && el.value != null && el.value != "Invalid date") {
          let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: moment(el.value).format("YYYY-MM-DD"), comp_length: el.data.comp_length, type: el.type, label: el.label };
          customArr.push(obj);
        }
      });
      /* Get slot data and store on form */
      this.studentAddFormData.slot_id = this.selectedSlotsID;
      this.studentAddFormData.stuCustomLi = customArr;
      this.studentAddFormData.photo = this.studentImage;
      this.additionalBasicDetails = false;


      if (this.studentAddFormData.assignedBatches == null || this.studentAddFormData.assignedBatches.length == 0) {
        this.studentAddFormData.assignedBatches = null
        this.studentAddFormData.assignedBatchescademicYearArray = null;
        this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray = null;
      }
      else if (this.studentAddFormData.assignedBatches != null && this.studentAddFormData.assignedBatches.length != 0) {
        this.studentAddFormData.assignedBatchescademicYearArray;
        this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray;
      }

      if (this.studentAddFormData.student_sex == null || this.studentAddFormData.student_sex == "") {
        this.studentAddFormData.student_sex = "M";
      }
      let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;
      if (this.studentAddFormData.student_email && this.studentAddFormData.student_email != "") {
        if (!email.test(this.studentAddFormData.student_email)) {
          this.msgToast.showErrorMessage('error', '', "Please enter valid email id");
          return;
        }
      }

      if (this.studentAddFormData.parent_email && this.studentAddFormData.parent_email != "") {
        if (!email.test(this.studentAddFormData.parent_email)) {
          this.msgToast.showErrorMessage('error', '', "Please enter valid email ID");
          return;
        }

      }
      if (this.studentAddFormData.guardian_email != "") {
        if (!email.test(this.studentAddFormData.guardian_email)) {
          this.msgToast.showErrorMessage('error', '', "Please enter valid guardian email ID");
          return;
        }
      }

      if ((this.commonServiceFactory.phonenumberCheck(this.studentAddFormData.parent_phone, this.maxlegth, this.country_id) == false &&
        this.studentAddFormData.parent_phone != "")
        || (this.commonServiceFactory.phonenumberCheck(this.studentAddFormData.guardian_phone, this.maxlegth, this.country_id) == false &&
          this.studentAddFormData.guardian_phone != "")) {
        this.msgToast.showErrorMessage('error', '', "Please enter valid parent/guardian mobile number");
        return;
      }

      this.studentAddFormData.enquiry_id = this.institute_enquiry_id;
      let dob = this.validateDOB();
      this.studentAddFormData.dob = dob;

      this.studentAddFormData.expiry_date = moment(this.studentAddFormData.expiry_date).format("YYYY-MM-DD");
      this.studentAddFormData.studentFileUploadJson = this.selectedFiles;
      console.log(this.studentAddFormData);
      this.btnSaveAndContinue.nativeElement.disabled = true;
      if (!this.auth.isRippleLoad.getValue()) {
        this.auth.showLoader();
        this.postService.quickAddStudent(this.studentAddFormData).subscribe(
          (res: any) => {
            let result: any = res;
            this.btnSaveAndContinue.nativeElement.disabled = false;
            this.auth.hideLoader();
            let statusCode = res.statusCode;
            let status_code = res.status_code;
            if (statusCode == 200) {
              this.removeImage = true;
              this.student_id = res.generated_id;
              this.msgToast.showErrorMessage('success', '', "Student details updated successfully");
              this.getCourseDropdown(res.generated_id);
              if (this.studentAddnMove) {
                this.updateStudentFeeDetails();
                sessionStorage.removeItem('studentPrefill'); // remove enquiry coverted stud --laxmi
                this.navigateTo('feeDetails');
              }
            }
            else if (statusCode == 2) {
              this.removeImage = true;
              this.msgToast.showErrorMessage('error', '', "An enquiry with the same contact number already exists");
              this.isDuplicateContactOpen();
            }
            else if (status_code == 202) {
              document.getElementById("confirm_msg").innerHTML = result.message;
              this.alertBox = false;
              this.student_id = result.student_id;
            }
          },
          err => {
            this.btnSaveAndContinue.nativeElement.disabled = false;
            this.auth.hideLoader();
            this.msgToast.showErrorMessage('error', '', err.error.message);
          });
      }
    }


    else {
      if (!isCustomComponentValid) {
        this.msgToast.showErrorMessage('error', '', "Please fill all the required fields on other details section");
      }
      // else if (!formValid) {
      //   this.msgToast.showErrorMessage('error', 'Personal Details Invalid/Incorrect', "Please enter valid name and contact number on personal details tab");
      // }
    }

  }

  check(val) {
    if (val == '1') {
      this.retrieveOldStudent = true;
      this.createDuplicateStudent = false;
    }
    if (val == '2') {
      this.retrieveOldStudent = false;
      this.createDuplicateStudent = true;
    }
  }

  closeAlert() {
    this.alertBox = true;
    this.retrieveOldStudent = true;
  }

  archivedStudent() {
    if (this.retrieveOldStudent) {
      this.studentAddFormData.is_active = "Y";
      this.postService.quickEditStudent(this.studentAddFormData, this.student_id).subscribe(
        (res: any) => {
          let statusCode = res.statusCode;
          if (statusCode == 200) {
            this.msgToast.showErrorMessage('success', '', "Student details updated successfully");
            if (this.studentAddnMove) {
              this.updateStudentFeeDetails();
              this.navigateTo('feeDetails');
            }
          }
          else {
            this.msgToast.showErrorMessage('error', '', "Failed to add student");
            this.isDuplicateContactOpen();
          }
          this.closeAlert();
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage('error', '', err.error.message);
          this.closeAlert();
        }
      );
    }

    if (this.createDuplicateStudent) {
      this.addDuplicateStudent();
    }

  }

  addDuplicateStudent() {
    this.studentAddFormData.archivedStudent = true;
    this.studentAddFormData.studentFileUploadJson = this.selectedFiles;
    this.postService.quickAddStudent(this.studentAddFormData).subscribe(
      (res: any) => {
        let result: any = res;
        this.auth.hideLoader();
        let statusCode = res.statusCode;
        if (statusCode == 200) {
          this.removeImage = true;
          this.student_id = res.generated_id;
          this.msgToast.showErrorMessage('success', '', "Student details updated successfully");

          this.getCourseDropdown(res.generated_id);
          if (this.studentAddnMove) {
            this.updateStudentFeeDetails();
            this.navigateTo('feeDetails');
          }
        }
        else if (statusCode == 2) {
          this.removeImage = true;
          this.msgToast.showErrorMessage('error', '', "An enquiry with the same contact number already exists");
          this.isDuplicateContactOpen();
        }
        this.closeAlert();
      },
      err => {
        this.btnSaveAndContinue.nativeElement.disabled = false;
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
        this.closeAlert();
      }
    )
  }


  getCustomValid(element): boolean {
    if (element.is_required == "Y" && element.value != "") {
      if (element.type == 5) {
        if (element.value != "" && element.value != null && element.value != "Invalid date") {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return true;
      }
    }
    else if (element.is_required == "Y" && element.value == "") {
      return false;
    }
    else if (element.is_required == "N") {
      return true;
    }
  }

  formfullValidator() {
    let msg = 'Enter '.concat(this.maxlegth).concat(' Digit Contact Number');
    let flag = this.commonServiceFactory.phonenumberCheck(this.studentAddFormData.student_phone.trim(), this.maxlegth, this.country_id);
    if (flag == true) {
      if (this.studentAddFormData.student_name == null || this.studentAddFormData.student_name == "") {
        this.msgToast.showErrorMessage('error', 'Personal Details Invalid/Incorrect', 'Please enter Name');
        return false;
      } else {

        return true;
      }
    }
    else {
      if (flag == 'noNumber') {
        this.msgToast.showErrorMessage('error', 'Personal Details Invalid/Incorrect', 'Please enter valid contact no.');
        return false;
      } else {
        this.msgToast.showErrorMessage('error', 'Personal Details Invalid/Incorrect', msg);
        return false;
      }
    }
  }

  validateDOB(): string {
    if (this.studentAddFormData.dob == '' || this.studentAddFormData.dob == null || this.studentAddFormData.dob == undefined || this.studentAddFormData.dob == 'Invalid date') {
      return '';
    }
    else {
      return moment(this.studentAddFormData.dob).format("YYYY-MM-DD");
    }
  }

  customComponentValid(): boolean {
    function isValid(el) {
      if (el.is_required == "Y" && el.value != '') {
        return true;
      }
      else if (el.is_required == "N") {
        return true;
      }
      else {
        return false;
      }
    }
    return this.customComponents.every(isValid)
  }


  isDuplicateContactOpen() {
    this.isDuplicateStudent = true;
  }

  isDuplicateContactClose() {
    this.isDuplicateStudent = false;
  }

  registerDuplicateStudent(form: NgForm) {
    /* Both Form are Valid Else there seems to be an error on custom component */
    let isCustomComponentValid: boolean = this.customComponents.every(el => { return this.getCustomValid(el); });
    let formValid: boolean = this.formfullValidator();
    //console.log(isCustomComponentValid);
    if (isCustomComponentValid && formValid) {
      //console.log("valid student generating Id Now");
      let customArr = [];
      this.customComponents.forEach(el => {
        /* Not Checkbox and value not empty */
        if (el.value != '' && el.type != 2 && el.type != 5) {
          let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: el.value, comp_length: el.data.comp_length, type: el.type };
          customArr.push(obj);
        }
        /* Checkbox Custom Component */
        else if (el.type == 2) {
          if (el.value == "Y" || el.value == true) {
            let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: "Y", comp_length: el.data.comp_length, type: el.type };
            customArr.push(obj);
          }
          else if (el.value == "N" || el.value == false) {
            let obj = { component_id: el.id, enq_custom_id: "0", enq_custom_value: "N", comp_length: el.data.comp_length, type: el.type };
            customArr.push(obj);
          }
        }
        /* Date Type Custom Component */
        else if (el.type == 5 && el.value != "" && el.value != null && el.value != "Invalid date") {
          let obj = {
            component_id: el.id,
            enq_custom_id: "0",
            enq_custom_value: moment(el.value).format("YYYY-MM-DD"),
            comp_length: el.data.comp_length,
            type: el.type
          }
          customArr.push(obj);
        }
      });
      /* Get slot data and store on form */
      this.studentAddFormData.slot_id = this.selectedSlotsID;
      this.studentAddFormData.stuCustomLi = customArr;
      this.studentAddFormData.photo = this.studentImage;
      this.additionalBasicDetails = false;

      if (this.studentAddFormData.assignedBatches == null) {
        this.studentAddFormData.assignedBatchescademicYearArray = null;
        this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray = null;
        this.studentAddFormData.batchJoiningDates = null;
      }
      if (this.studentAddFormData.student_sex == null || this.studentAddFormData.student_sex == "") {
        this.studentAddFormData.student_sex = "M";
      }
      this.studentAddFormData.studentFileUploadJson = this.selectedFiles;
      this.auth.showLoader();
      this.postService.quickAddStudent(this.studentAddFormData).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          let statusCode = res.statusCode;
          if (statusCode == 200) {
            this.removeImage = true;
            this.student_id = res.generated_id;
            this.msgToast.showErrorMessage('success', '', "Student details Updated Successfully");
            this.getCourseDropdown(res.generated_id);
            if (this.studentAddnMove) {
              this.updateStudentFeeDetails();
              this.navigateTo('feeDetails');
            }
          }
          else if (statusCode == 2) {
            this.removeImage = true;
            this.msgToast.showErrorMessage('error', '', "A student with the same contact number already exists");
            this.isDuplicateContactClose();
          }
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage('error', '', err.error.message);
        });
    }
    else {
      if (!isCustomComponentValid) {
        // console.log("invalid custom component");
        this.msgToast.showErrorMessage('error', '', "Please fill all the required fields on other details section");
      }
      else if (!formValid) {
        this.msgToast.showErrorMessage('error', '', "Please enter valid name and contact number on personal details section");
      }
    }
  }

  clearFormAndMove() {
    this.navigateTo('studentForm');
    this.studentAddFormData = {
      student_name: "",
      student_sex: "",
      student_email: "",
      student_phone: "",
      student_curr_addr: "",
      dob: "",
      doj: moment().format('YYYY-MM-DD'),
      school_name: "-1",
      parent_name: "",
      parent_email: "",
      parent_phone: "",
      guardian_name: "",
      guardian_email: "",
      guardian_phone: "",
      is_active: "Y",
      institution_id: sessionStorage.getItem('institute_id'),
      assignedBatches: [],
      assignedBatchescademicYearArray: [""],
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
      language_inst_status: null,
      stuCustomLi: [],
      deleteCourse_SubjectUnPaidFeeSchedules: false
    };
    this.removeImage = true;
    this.fetchPrefillFormData();
  }

  convertToStudentDetected() {
    this.isConvertEnquiry = true;
    this.enquiryData = JSON.parse(sessionStorage.getItem('studentPrefill'));
    this.studentAddFormData.student_name = this.enquiryData.name;
    this.studentAddFormData.student_phone = this.enquiryData.phone;
    this.studentAddFormData.student_email = this.enquiryData.email;
    this.studentAddFormData.student_sex = this.enquiryData.gender;
    this.studentAddFormData.school_name = this.enquiryData.school_id;
    this.studentAddFormData.standard_id = this.enquiryData.standard_id;
    this.studentAddFormData.parent_name = this.enquiryData.parent_name;
    this.studentAddFormData.parent_phone = this.enquiryData.parent_phone;
    this.studentAddFormData.parent_email = this.enquiryData.parent_email;
    this.studentAddFormData.student_curr_addr = this.enquiryData.curr_address;
    this.studentAddFormData.country_id = this.enquiryData.country_id;
    this.studentAddFormData.state_id = this.enquiryData.state_id;
    this.studentAddFormData.city_id = this.enquiryData.city_id;
    this.studentAddFormData.area_id = this.enquiryData.area_id;
    this.institute_enquiry_id = this.enquiryData.institute_enquiry_id;
    this.studentAddFormData.enquiry_id = this.enquiryData.enquiry_id;
    this.studentAddFormData.assigned_to_id = this.enquiryData.assigned_to;
    this.studentAddFormData.dob = new Date(this.enquiryData.dob);
    if (this.studentAddFormData.dob == '' || this.studentAddFormData.dob == null ||
      this.studentAddFormData.dob == undefined || this.studentAddFormData.dob == 'Invalid Date') {
      this.studentAddFormData.dob = '';
    }
    console.log(this.studentAddFormData);
    this.checkStatusofStudent = false;
    this.onChangeObj(this.enquiryData.country_id);
  }

  fetchEnquiryCustomComponentDetails() {
    let id = this.institute_enquiry_id;
    this.auth.showLoader();
    this.studentPrefillService.fetchCustomComponentById(id, undefined, 1).subscribe(
      res => {
        this.auth.hideLoader();
        this.enquiryCustomComp = res;
        this.filterStudentCustomComp();
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  filterStudentCustomComp() {
    this.customComponents.forEach(c => {
      if (c.data.on_both == "Y") {
        c.value = this.updateEnquiryComponent(c.id);
        c.data.enq_custom_value = this.updateEnquiryComponent(c.id);
      }
    });
  }

  /* arg1::studentComp arg2:: enquiryComp */
  updateEnquiryComponent(id): any {
    let result: any;

    this.enquiryCustomComp.forEach(el => {
      if (el.component_id == id) {
        if (el.type == 4) {
          result = (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value;
        }
        if (el.type == 2) {
          result = el.enq_custom_value == "Y" ? true : false
        }
        else if (el.type != 2 && el.type != 4) {
          result = el.enq_custom_value;
        }
      }
    });
    return result;
  }

  clearFormAndRoute(form: NgForm) {
    this.studentAddFormData = {
      student_name: "",
      student_sex: "",
      student_email: "",
      student_phone: "",
      student_curr_addr: "",
      dob: "",
      doj: moment().format('YYYY-MM-DD'),
      school_name: "-1",
      parent_name: "",
      parent_email: "",
      parent_phone: "",
      guardian_name: "",
      guardian_email: "",
      guardian_phone: "",
      is_active: "Y",
      institution_id: sessionStorage.getItem('institute_id'),
      assignedBatches: [],
      assignedBatchescademicYearArray: [""],
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
      language_inst_status: null,
      stuCustomLi: [],
      deleteCourse_SubjectUnPaidFeeSchedules: false
    };
    form.reset();

    if (this.isConvertEnquiry) {
      this.router.navigate(['/view/leads/enquiry']);
      sessionStorage.removeItem('studentPrefill');
      this.clearFormAndMove();
    }
    else {
      this.router.navigate(['/view/students']);
    }
  }

  clearDateoJoining() {
    this.studentAddFormData.doj = '';
  }

  updateFormIsActive(ev) {
    if (ev) {
      this.studentAddFormData.is_active = "Y";
    }
    else {
      this.studentAddFormData.is_active = "N";
    }
  }

  cancelStudentUpload() {
    this.router.navigate(['/view/students']);
  }

  /* ========================================================================================================== */
  /* ======================================== Student Amission Methods End Here =========================================== */
  /* ========================================================================================================== */

  updateStudentFeeDetails() {
    this.auth.showLoader();
    this.flushDataAfterPayement();
    this.fetchService.fetchStudentFeeDetailById(this.student_id).subscribe(
      res => {
        this.isDuplicateContactClose();
        this.auth.hideLoader();
        this.feeObject = res;
        this.clonedFeeObject = this.commonServiceFactory.keepCloning(res);
        if (res.customFeeSchedules != null && res.customFeeSchedules.length > 0) {
          this.checkBoxGroup.showFeeSection = true;
          this.checkBoxGroup.hideReconfigure = true;
          if (sessionStorage.getItem('enable_fee_template_country_wise') == '1') {
            this.setTemplateDetails(res.customFeeSchedules[0]);// if setting is enable then country symbol and details will change --laxmi
          } else {
            this.countryDetails.forEach(element => {
              if (element.id == this.studentAddFormData.country_id) {
                this.instituteCountryDetObj = element;
                this.maxlegth = this.instituteCountryDetObj.country_phone_number_length;
                this.country_id = element.id;
                console.log(this.instituteCountryDetObj);
              }
            });
          }
          if (sessionStorage.getItem('permissions')) {
            let permissions = JSON.parse(sessionStorage.getItem('permissions'));
            if (!this.role_feature.FEE_MENU) {
              this.checkBoxGroup.hideReconfigure = false;
            }
          }
          if (sessionStorage.getItem('permissions')) {
            let permissions = JSON.parse(sessionStorage.getItem('permissions'));
            if (this.role_feature.FEE_CHEQUE_MANAGE) {
              this.checkBoxGroup.showFeeSection = true;
              this.checkBoxGroup.feeDiscouting = false;
              this.checkBoxGroup.hideReconfigure = false;
            }
            if (this.role_feature.FEE_MENU) {
              this.checkBoxGroup.showFeeSection = true;
              this.checkBoxGroup.hideReconfigure = true;
            }
            else {
              this.checkBoxGroup.hideReconfigure = false;
            }

            if (this.role_feature.FEE_MENU) {
              this.checkBoxGroup.feeDiscouting = true;
            }

            if (sessionStorage.getItem('permissions') == undefined
              || sessionStorage.getItem('permissions') == ''
              || sessionStorage.getItem('username') == 'admin') {
              this.checkBoxGroup.feeDiscouting = true;
              this.checkBoxGroup.showFeeSection = true;
              this.checkBoxGroup.hideReconfigure = true;
              this.checkBoxGroup.manageCheque = true;
            }
          }
          this.cardAmountObject = this.feeService.makeCardLayoutJson(res.customFeeSchedules, this.feeObject.registeredServiceTax, this.instituteCountryDetObj.id); //res.country_id);
          this.cardAmountObject.discountAmount = this.cardAmountObject.discountAmount + res.studentwise_total_fees_discount;
          console.log('cardObject', this.cardAmountObject);
          let customFeeSchedules = this.feeService.uniqueConvertFeeJson(res.customFeeSchedules);
          this.subjectWiseInstallmentArray = this.feeService.categoriseCourseWise(customFeeSchedules, res.registeredServiceTax, this.instituteCountryDetObj.id); // tax is apllied as per stud assign template //res.country_id);
          console.log('subjectWise', this.subjectWiseInstallmentArray);
          this.onPaidOrUnpaidCheckbox(this.instituteCountryDetObj.id);//res.country_id);
        } else {
          this.checkBoxGroup.showFeeSection = false;
          this.checkBoxGroup.hideReconfigure = false;
        }
      },
      err => {
        this.commonServiceFactory.showErrorMessage('error', err.error.message, '');
        this.auth.hideLoader();
      }
    );
  }

  setTemplateDetails(coutry_object) {
    this.countryDetails.forEach(element => {
      if (element.id == coutry_object.country_id) {
        this.instituteCountryDetObj = element;
      }
    });
  }


  openInstallmentListOfCourse(index, operation, event) {
    document.getElementById('idDownIcon' + index).classList.toggle('hide');
    document.getElementById('idUpIcon' + index).classList.toggle('hide');
    document.getElementById('installmentTable' + index).classList.toggle('hide');
    // if (operation == 'open') {
    //   document.getElementById('idDownIcon' + index).classList.add('hide');
    //   document.getElementById('idUpIcon' + index).classList.remove('hide');
    //   document.getElementById('installmentTable' + index).classList.remove('hide');
    // } else {
    //   document.getElementById('idDownIcon' + index).classList.remove('hide');
    //   document.getElementById('idUpIcon' + index).classList.add('hide');
    //   document.getElementById('installmentTable' + index).classList.add('hide');
    // }
    event.stopPropagation();
  }

  mainTAbleCheckboxClicked(event) {
    this.subjectWiseInstallmentArray = this.feeService.uiSelectionForCourse(this.subjectWiseInstallmentArray, 'uiSelected', event);
    if (event) {
      this.totalAmountToPay = Number(this.cardAmountObject.amountDue);
    } else {
      this.totalAmountToPay = 0;
    }
  }

  onCheckBoxSelection(event, operation, data) {
    if (event) {
      if (operation == "course") {
        data.installmentArray = this.feeService.changeUiSelectedKeyValue(data.installmentArray, 'uiSelected', true);
        this.totalAmountToPay = this.feeService.getTotalAmount(this.subjectWiseInstallmentArray);
      } else {
        this.totalAmountToPay = this.feeService.getTotalAmount(this.subjectWiseInstallmentArray);
      }
      this.tableHeaderCheckbox = this.feeService.checkHeaderTableSelection(this.subjectWiseInstallmentArray);
    } else {
      this.tableHeaderCheckbox = false;
      if (operation == "course") {
        data.installmentArray = this.feeService.changeUiSelectedKeyValue(data.installmentArray, 'uiSelected', false);
        this.totalAmountToPay = this.feeService.getTotalAmount(this.subjectWiseInstallmentArray);
      } else {
        this.totalAmountToPay = this.feeService.getTotalAmount(this.subjectWiseInstallmentArray);
      }
    }
  }

  onPaidOrUnpaidCheckbox(country_id) {
    if (this.checkBoxGroup.unpaidInstallment && this.checkBoxGroup.paidInstallment) {
      let installment = this.commonServiceFactory.keepCloning(this.clonedFeeObject.customFeeSchedules);
      this.subjectWiseInstallmentArray = this.feeService.categoriseCourseWise(installment, this.clonedFeeObject.registeredServiceTax, country_id);
      return;
    }

    if (this.checkBoxGroup.unpaidInstallment) {
      let installment = this.commonServiceFactory.keepCloning(this.clonedFeeObject.customFeeSchedules);
      let unpaidInstallment = installment.filter(el => el.paid_full == "N");
      this.subjectWiseInstallmentArray = this.feeService.categoriseCourseWise(unpaidInstallment, this.clonedFeeObject.registeredServiceTax, country_id);
      return;
    }

    if (this.checkBoxGroup.paidInstallment) {
      let installment = this.commonServiceFactory.keepCloning(this.clonedFeeObject.customFeeSchedules);
      let unpaidInstallment = installment.filter(el => el.paid_full == "Y");
      this.subjectWiseInstallmentArray = this.feeService.categoriseCourseWise(unpaidInstallment, this.clonedFeeObject.registeredServiceTax, country_id);
      return;
    }

    if (this.checkBoxGroup.paidInstallment == false && this.checkBoxGroup.unpaidInstallment == false) {
      this.subjectWiseInstallmentArray = [];
      return;
    }
  }

  openPaymentDetails($event) {
    $event.preventDefault();
    this.flushPaymentPopUpData();
    this.paymentPopUpJson.immutableAmount = this.totalAmountToPay;
    this.paymentPopUpJson.payingAmount = this.totalAmountToPay;
    this.isFeePaymentUpdate = true;
    this.getPaymentModes();
  }

  getPaymentModes() {
    this.httpService.getData('/api/v1/masterData/type/PAYMENT_MODES').subscribe(
      (res: any) => {
        console.log(res);
        this.Payment_Modes = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  flushPaymentPopUpData() {
    this.paymentPopUpJson = {
      immutableAmount: 0,
      payingAmount: 0,
      paid_date: moment().format('YYYY-MM-DD'),
      payment_mode: 'Cash',
      reference_no: '',
      remarks: "",
      selectedPdcId: '',
      pdcSelectedForm: {
        bank_name: '',
        cheque_amount: 0,
        cheque_date: moment().format("YYYY-MM-DD"),
        cheque_no: '',
        pdc_cheque_id: ''
      },
      genFeeRecipt: false,
      emailFeeRecipt: false
    }
    this.isFeePaymentUpdate = false;
  }

  feePdcSelected(id) {
    let obj: any = {
      bank_name: '',
      cheque_amount: this.paymentPopUpJson.payingAmount,
      cheque_date: moment().format("YYYY-MM-DD"),
      cheque_no: '',
      pdc_cheque_id: ''
    };
    if (id === '') {
      this.paymentPopUpJson.pdcSelectedForm = obj;
      this.paymentPopUpJson.selectedPdcId = '';
    }
    else {
      this.chequePdcList.forEach(el => {
        if (id == el.cheque_id) {
          obj.bank_name = el.bank_name;
          obj.cheque_amount = el.cheque_amount;
          obj.cheque_date = moment(el.cheque_date).format("YYYY-MM-DD");
          obj.cheque_no = el.cheque_no;
          obj.pdc_cheque_id = el.cheque_id;
          this.paymentPopUpJson.pdcSelectedForm = obj;
          this.paymentPopUpJson.selectedPdcId = id;
          this.paymentPopUpJson.payingAmount = el.cheque_amount;
          obj.country_id = el.country_id;
        }
      });
    }
  }

  payFeeInstallments() {
    // Validate if proper data is given or not
    let check: boolean = this.feeService.validatePaymentDetails(this.paymentPopUpJson);
    if (!check) {
      return;
    }
    // Confirmation if due date is last acad year
    let checkAcadYearPopUp: boolean = this.feeService.checkForLastYearInstallmentPayment(this.subjectWiseInstallmentArray);
    if (checkAcadYearPopUp) {
      if (confirm('You are about to update fee installment of last financial year. Are you sure you want to continue?')) {
        this.makePaymentForInstallment();
      } else {
        return;
      }
    } else {
      this.makePaymentForInstallment();
    }
  }

  makePaymentForInstallment() {
    let JsonToSendOnServer = this.feeService.makePaymentFinalJson(this.subjectWiseInstallmentArray, this.paymentPopUpJson);
    JsonToSendOnServer.student_id = this.student_id;
    console.log(JsonToSendOnServer);
    this.auth.showLoader();
    this.btnPayment.nativeElement.disabled = true;
    this.postService.payPartialFeeAmount(JsonToSendOnServer).subscribe(
      res => {
        this.btnPayment.nativeElement.disabled = false;
        this.auth.hideLoader();
        this.commonServiceFactory.showErrorMessage('success', '', 'Fee details has been updated');
        if (this.paymentPopUpJson.genFeeRecipt) {
          this.generateFeeRecipt(res);
        }
        if (this.paymentPopUpJson.emailFeeRecipt) {
          this.emailFeeReceipt(res);
        }
        this.flushDataAfterPayement();
        this.updateStudentFeeDetails();
      },
      err => {
        this.btnPayment.nativeElement.disabled = false;
        this.auth.hideLoader();
        this.commonServiceFactory.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  generateFeeRecipt(res) {
    this.fetchService.getFeeReceiptById(this.student_id, res.other).subscribe(
      (res: any) => {
        this.downloadDocument(res);
      },
      err => {
        this.commonServiceFactory.showErrorMessage('error', '', err.error.message);
      });
  }

  emailFeeReceipt(res) {
    this.fetchService.emailReceiptById(this.student_id, res.other).subscribe(
      res => {
        this.commonServiceFactory.showErrorMessage('success', '', 'Receipt has been sent to student/parent email ID');
      }
    )
  }

  downloadDocument(res) {
    let body = res;
    let byteArr = this.commonServiceFactory.convertBase64ToArray(body.document);
    let fileName = body.docTitle;
    let file = new Blob([byteArr], { type: 'application/pdf' });
    let url = URL.createObjectURL(file);
    let link = document.getElementById("payMultiReciept");
    if (link.getAttribute('href') == "" || link.getAttribute('href') == null) {
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.click();
      link.setAttribute("href", "");
    }
  }

  totalPartialChange(e) {
    e = Number(e.target.value);
    if (e == 0) {
      this.commonServiceFactory.showErrorMessage('warning', '', 'Invalid payment amount');
      this.paymentPopUpJson.payingAmount = this.paymentPopUpJson.immutableAmount;
      this.paymentPopUpJson.pdcSelectedForm.cheque_amount = this.paymentPopUpJson.immutableAmount;
    }
    else {
      this.paymentPopUpJson.pdcSelectedForm.cheque_amount = Number(e);
    }


    // e = Number(e);
    // if (e > this.paymentPopUpJson.immutableAmount) {
    //   this.commonServiceFactory.showErrorMessage('warning', 'Invalid payment amount', '');
    //   this.paymentPopUpJson.payingAmount = this.paymentPopUpJson.immutableAmount;
    //   this.paymentPopUpJson.pdcSelectedForm.cheque_amount = this.paymentPopUpJson.immutableAmount;
    // } else if (e <= 0) {
    //   this.commonServiceFactory.showErrorMessage('warning', 'Invalid payment amount', '');
    //   this.paymentPopUpJson.payingAmount = this.paymentPopUpJson.immutableAmount;
    //   this.paymentPopUpJson.pdcSelectedForm.cheque_amount = this.paymentPopUpJson.immutableAmount;
    // }
    // else {
    //   this.paymentPopUpJson.pdcSelectedForm.cheque_amount = Number(e);
    // }
  }

  flushDataAfterPayement() {
    this.flushPaymentPopUpData();
    this.isFeePaymentUpdate = false;
    this.subjectWiseInstallmentArray = [];
    this.cardAmountObject = {
      feeAmountInclTax: 0,
      feeAmountExclTax: 0,
      taxAmount: 0,
      discountAmount: 0,
      amountPaid: 0,
      amountDue: 0
    };
    this.totalAmountToPay = 0;
  }

  // Add Edit Discount PopUp

  openDiscountApply() {
    this.isDiscountApply = true;
  }

  onDiscountPopUpClose() {
    this.isDiscountApply = false;
    this.updateStudentFeeDetails();
  }

  // payment history pop up

  schedule_id: any = "";
  openPartialPaymentHistor(data) {
    this.isPartialPayHistory = true;
    this.schedule_id = data.schedule_id;
  }

  closeHistory(event) {
    this.isPartialPayHistory = false;
    this.schedule_id = "";
  }

  /* Configure Fee --section code is commented by laxmi -- 21-02-2020

  // configureFees($event) {
  //   $event.preventDefault();
  //   this.isConfigureFees = true;
  //   this.is_undo = "N";
  // }

  // closeConfigureFees() {
  //   this.isConfigureFees = false;
  //   this.feeStructureForm = {
  //     studentArray: ["-1"],
  //     template_effective_date: ""
  //   }
  //   this.feeTempSelected = "";
  // }
    reCreateFeeAgain() {
    if (confirm("By changing the fee template, all existing fee schedule and transactions shall be discarded and archived. Are you sure you want to continue?")) {
      this.isConfigureFees = true;
      this.is_undo = 'Y';
      this.feeTemplateById = { feeTypeMap: "", customFeeSchedules: [], registeredServiceTax: "", studentArray: "", studentwise_total_fees_amount: "", studentwise_total_fees_balance_amount: "", studentwise_total_fees_amount_paid: "", studentwise_total_fees_discount: "", studentwise_fees_tax_applicable: "", no_of_installments: "", discount_fee_reason: "", template_name: "", template_id: "", template_effective_date: "", is_fee_schedule_created: "", is_fee_tx_done: "", is_undo: this.is_undo, is_fee_other_inst_created: "", is_delete_other_fee_types: "", chequeDetailsJson: "", payment_mode: "", remarks: "", paid_date: "", toCreate: false, is_cheque_details_required: "", reference_no: "", invoice_no: "", uiSelected: false };
      this.isDefineFees = false;
      this.isDiscountApplied = false;
    }
  }
*/
  applyConfiguredFees($event) {
    $event.preventDefault();
    this.feeTemplateById = {
      feeTypeMap: "",
      customFeeSchedules: [],
      registeredServiceTax: "",
      toCreate: "",
      studentArray: "",
      studentwise_total_fees_amount: "",
      studentwise_total_fees_balance_amount: "",
      studentwise_total_fees_amount_paid: "",
      studentwise_total_fees_discount: "",
      studentwise_fees_tax_applicable: "",
      no_of_installments: "",
      discount_fee_reason: "",
      template_name: "",
      template_id: "",
      template_effective_date: "",
      is_fee_schedule_created: "",
      is_fee_tx_done: "",
      is_undo: this.is_undo,
      is_fee_other_inst_created: "",
      is_delete_other_fee_types: "",
      chequeDetailsJson: "",
      payment_mode: "",
      remarks: "",
      paid_date: "",
      is_cheque_details_required: "",
      reference_no: "",
      invoice_no: "",
      uiSelected: false
    };
    let dd = moment(this.feeStructureForm.template_effective_date).format('YYYY-MM-DD');
    /* success */
    if ((this.feeTempSelected != "" && this.feeTempSelected != null) && (dd != "" && dd != null && dd != "Invalid date")) {
      this.feeStructureForm.template_effective_date = dd;
      this.studentPrefillService.getFeeStructureById(this.feeTempSelected, this.feeStructureForm).subscribe(
        res => {
          this.feeTemplateById = res;
          this.feeTemplateById.template_effective_date = this.feeStructureForm.template_effective_date;
          this.feeTemplateById.template_id = this.feeTempSelected;
          this.isDefineFees = true;
          // this.isFeeApplied = true;
          res.customFeeSchedules.forEach(el => {
            el.due_date = new Date(el.due_date);
            /* Taxes Here */
            if (sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1') {
              this.service_tax = res.registeredServiceTax;
              if (el.fee_type_name == "INSTALLMENT") {
                let tax = el.initial_fee_amount * (this.service_tax / 100);
                if (parseInt(el.initial_fee_amount) == parseInt(el.fees_amount)) {
                  el.initial_fee_amount = this.feeService.precisionRound(el.fees_amount - tax, -1);
                }
              }
              else {
                let tax = el.initial_fee_amount * (el.service_tax / 100);
              }
            }
            else if (sessionStorage.getItem('enable_tax_applicable_fee_installments') == '0') {
              this.service_tax = 0;
            }
          });
          // this.closeConfigureFees();
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage('error', '', err.error.message);
        }
      );
    }
    /* fee id not found */
    else if ((this.feeTempSelected == "" || this.feeTempSelected == null)) {
      this.msgToast.showErrorMessage('error', '', "Please select a template from dropdown list");
    }
    /* date invalid not selected */
    else if (dd == "" || dd == null || dd == "Invalid date") {
      this.msgToast.showErrorMessage('error', '', "Please enter a valid date");
    }
  }

  clearEffectiveDate($event) {
    $event.preventDefault();
    this.feeStructureForm.template_effective_date = '';
  }

  closeAllFeePops(event) {
    if (event) {
      this.isDefineFees = false;
      this.updateStudentFeeDetails();
    } else {
      if (confirm("All Changes made to fee template will be discarded!")) {
        this.isDefineFees = false;
        this.updateStudentFeeDetails();
      }
    }
  }

  //Reconfigure Pop up

  reConfigureFees() {
    this.isDefineFees = true;
    this.feeTemplateById = this.feeObject;
  }

  // PDC Cheque PopUp
  getPdcChequeList() {
    let obj = {
      cheque_status: this.pdcSearchObj.cheque_status == '' ? -1 : this.pdcSearchObj.cheque_status,
      student_id: this.student_id,
      cheque_date_from: this.pdcSearchObj.cheque_date_from == "Invalid date" ? '' : moment(this.pdcSearchObj.cheque_date_from).format('YYYY-MM-DD'),
      cheque_date_to: this.pdcSearchObj.cheque_date_to == "Invalid date" ? '' : moment(this.pdcSearchObj.cheque_date_to).format('YYYY-MM-DD')
    }
    this.auth.showLoader();
    this.pdcAddForm.country_id = this.instituteCountryDetObj.id;
    this.studentPrefillService.getPdcList(this.student_id, obj).subscribe(
      res => {
        this.auth.hideLoader();
        let temp: any[] = [];
        res.forEach(el => {
          let obj = { bank_name: el.bank_name, cheque_amount: el.cheque_amount, cheque_date: el.cheque_date, cheque_date_from: el.cheque_date_from, cheque_date_to: el.cheque_date_from, cheque_id: el.cheque_id, cheque_no: el.cheque_no, cheque_status: el.cheque_status, cheque_status_key: el.cheque_status_key, clearing_date: el.clearing_date, genAck: el.genAck, institution_id: el.institution_id, sendAck: el.sendAck, student_id: el.student_id, student_name: el.student_name, student_phone: el.student_phone, uiSelected: false, country_id: el.country_id };
          temp.push(obj);
        });
        this.chequePdcList = temp;
      }
    )
  }

  addNewPDCState() {
    //console.log(this.pdcAddForm);
    let obj = {
      bank_name: this.pdcAddForm.bank_name,
      cheque_amount: this.pdcAddForm.cheque_amount,
      cheque_date: moment(this.pdcAddForm.cheque_date).format("YYYY-MM-DD"),
      cheque_id: this.pdcAddForm.cheque_id,
      cheque_no: this.pdcAddForm.cheque_no,
      cheque_status: this.pdcAddForm.cheque_status,
      cheque_status_key: this.pdcAddForm.cheque_status_key,
      clearing_date: moment(this.pdcAddForm.clearing_date).format("YYYY-MM-DD"),
      institution_id: sessionStorage.getItem('institute_id'),
      student_id: this.student_id,
      country_id: this.pdcAddForm.country_id
    };
    if (this.validPdc(obj)) {
      this.newPdcArr.push(obj);
      this.addPdcDataToServer();
    }
  }

  addPdcDataToServer() {
    let temp: any[] = [];
    this.newPdcArr.forEach(e => {
      let obj = { cheque_no: e.cheque_no, bank_name: e.bank_name, cheque_date: e.cheque_date, student_id: this.student_id, clearing_date: e.clearing_date, institution_id: sessionStorage.getItem('institute_id'), cheque_amount: e.cheque_amount, genAck: this.genPdcAck === true ? "Y" : "N", sendAck: this.sendPdcAck === true ? "Y" : "N", country_id: e.country_id };
      temp.push(obj);
    });
    this.newPdcArr = [];
    this.genPdcAck = false;
    this.sendPdcAck = false;
    this.auth.showLoader();
    this.postService.addChequePdc(temp).subscribe(
      res => {
        this.auth.hideLoader();
        this.chequePdcList = [];
        this.newPdcArr = [];
        this.pdcAddForm = { bank_name: '', cheque_amount: '', cheque_date: '', cheque_id: 0, cheque_no: '', cheque_status: '', cheque_status_key: 0, clearing_date: '', institution_id: sessionStorage.getItem('institute_id'), student_id: 0, country_id: '' };
        this.getPdcChequeList();
      },
      err => {
        this.auth.hideLoader();
        this.commonServiceFactory.showErrorMessage('error', err.error.message, '');
        this.chequePdcList = [];
        this.getPdcChequeList();
      }
    )

  }

  editPDC(data) {
    document.getElementById((data.student_id + data.cheque_id).toString()).classList.remove('displayComp');
    document.getElementById((data.student_id + data.cheque_id).toString()).classList.add('editComp');
  }

  deletePDC(data, i) {
    if (confirm("Are you sure,you want to delete the Cheque?")) {
      this.postService.deletePdcById(data.cheque_id).subscribe(
        res => {
          this.chequePdcList.splice(i, 1);
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage('error', '', err.error.message);
        }
      )
    }
  }

  updatePDC(el) {
    this.auth.showLoader();
    if (this.validPdc(el)) {
      let obj = { bank_name: el.bank_name, cheque_amount: el.cheque_amount, cheque_date: moment(el.cheque_date).format("YYYY-MM-DD"), cheque_id: el.cheque_id, cheque_no: el.cheque_no, cheque_status_key: el.cheque_status_key, clearing_date: moment(el.clearing_date).format("YYYY-MM-DD"), institution_id: sessionStorage.getItem('institute_id'), student_id: el.student_id, country_id: el.country_id };
      this.postService.updateFeeDetails(obj).subscribe(
        res => {
          // this.pdcStatus.forEach(e => { if (e.cheque_status_key == el.cheque_status_key) { el.cheque_status = e.cheque_status } });
          this.auth.hideLoader();
          this.getPdcChequeList();
          document.getElementById((el.student_id + el.cheque_id).toString()).classList.add('displayComp');
          document.getElementById((el.student_id + el.cheque_id).toString()).classList.remove('editComp');
        },
        err => {
          this.auth.hideLoader();
          this.msgToast.showErrorMessage('error', '', err.error.message);
        }
      )
    }
  }

  cancelEditPDC(data) {
    document.getElementById((data.student_id + data.cheque_id).toString()).classList.add('displayComp');
    document.getElementById((data.student_id + data.cheque_id).toString()).classList.remove('editComp');
    this.getPdcChequeList();
  }

  validPdc(obj): boolean {
    if (obj.cheque_date == 'Invalid date' || obj.cheque_date == '' || obj.cheque_no.toString().length != 6 || obj.cheque_amount <= 0) {
      if (obj.cheque_date == 'Invalid date' || obj.cheque_date == '') {
        this.msgToast.showErrorMessage('error', '', "Please enter a valid cheque date");
      }
      if (obj.cheque_no.toString().length != 6) {
        this.msgToast.showErrorMessage('error', '', "Please enter a valid cheque number");
      }
      if (obj.cheque_amount <= 0) {
        this.msgToast.showErrorMessage('error', '', "Please enter a valid amount");
      }
      return false;
    }
    else {
      return true;
    }
  }

  generateAck() {
    let selectedChqueId = this.getSelectedRow(this.chequePdcList);
    if (selectedChqueId != null && selectedChqueId != undefined && selectedChqueId.length > 0) {
      let chequeId = selectedChqueId.join(',');
      this.generateAcknowledgeAPi(chequeId, this.student_id, 'undefined');
    }
    else {
      this.commonServiceFactory.showErrorMessage('error', '', 'No PDC selected')
    }
  }

  sendAck() {
    let selectedChqueId = this.getSelectedRow(this.chequePdcList);
    if (selectedChqueId != null && selectedChqueId != undefined && selectedChqueId.length > 0) {
      let chequeId = selectedChqueId.join(',');
      this.generateAcknowledgeAPi(chequeId, this.student_id, "Y");
    } else {
      this.commonServiceFactory.showErrorMessage('error', 'No PDC selected', '')
    }
  }

  generateAcknowledgeAPi(chequeId, student_id, key) {
    this.auth.showLoader();
    this.postService.generateAcknowledge(chequeId, student_id, key).subscribe(
      res => {
        this.auth.hideLoader();
        if (key == 'Y') {
          this.commonServiceFactory.showErrorMessage('success', '', 'Sent successfullly');
        } else if (key == "undefined") {
          this.downloadDocument(res);
        }
      },
      err => {
        this.auth.hideLoader();
        this.commonServiceFactory.showErrorMessage('error', err.error.message, '');
      }
    )
  }

  getSelectedRow(data) {
    const tmp = [];
    if (data.length > 0) {
      data.filter(
        ele => {
          if (ele.uiSelected == true) {
            tmp.push(ele.cheque_id)
          }
        }
      )
      return tmp;
    } else {
      return [];
    }
  }

  closePDCPop() {
    this.isPdcApply = false
  }

  sort(key) {
    this.key = key;
    if (key == 'due_date') {
      this.reverse = false;
    }
    else {
      this.reverse = !this.reverse;
    }
  }

  /* ========================================================================================================== */
  /* ========================================== Inventory Allocation Methods ================================== */
  /* ========================================================================================================== */


  studentAddedNotifier() {
    this.msgToast.showErrorMessage('success', '', "Student details updated");
    this.router.navigate(['/view/students']);
  }




  updateStudentAllocatedInventory() {
    // if (this.isFeeApplied) {
    //   this.asssignCustomizedFee(this.student_id);
    // }
    // else {
    this.studentAddedNotifier();
    // }
  }


  // Inventory Page
  fetchInventoryList() {
    this.auth.showLoader();
    this.studentPrefillService.fetchInventoryList().subscribe(
      data => {
        this.auth.hideLoader();
        this.inventoryItemsArr = data;
      },
      err => {
        this.auth.hideLoader();
        this.msgToast.showErrorMessage('error', '', err.error.message);
      }
    );
  }

  onInventoryItemSelction() {
    let temp: any = this.inventoryItemsArr.filter(
      el => el.item_id == this.addInventory.item_id
    );
    this.addInventory.available_units = temp[0].available_units;
  }

  allocateInventoryToStudent() {
    if (this.addInventory.item_id != '-1') {
      if (this.addInventory.alloted_units > 0) {
        if (this.addInventory.alloted_units > this.addInventory.available_units) {
          this.msgToast.showErrorMessage('error', '', 'Please enter allocated unit less than available units');
          return;
        } else {
          if (this.addInventory.date_of_dispatch != '') {
            this.addInventory.date_of_dispatch = moment(this.addInventory.date_of_dispatch).format('YYYY-MM-DD')
          }
          if (this.addInventory.date_of_delivery_of_sm != '') {
            this.addInventory.date_of_delivery_of_sm = moment(this.addInventory.date_of_delivery_of_sm).format('YYYY-MM-DD')
          }
          let obj: any = {
            alloted_units: this.addInventory.alloted_units.toString(),
            institution_id: sessionStorage.getItem('institute_id'),
            item_id: this.addInventory.item_id,
            student_id: this.student_id,
            date_of_dispatch: this.addInventory.date_of_dispatch,
            name_of_courier_service: this.addInventory.name_of_courier_service,
            docket_id: this.addInventory.docket_id,
            date_of_delivery_of_sm: this.addInventory.date_of_delivery_of_sm,
          };
          this.auth.showLoader();
          this.postService.allocateInventory(obj).subscribe(
            res => {
              this.auth.hideLoader();
              this.msgToast.showErrorMessage('success', '', "Inventory item allocated successfully");
              this.addInventory = {
                alloted_units: 0,
                item_id: -1,
                available_units: '',
                date_of_dispatch: '',
                name_of_courier_service: '',
                docket_id: '',
                date_of_delivery_of_sm: '',
              };
              this.getAllocatedHistory();
              this.fetchInventoryList();
            },
            err => {
              this.auth.hideLoader();
              this.msgToast.showErrorMessage('error', '', err.error.message);
            }
          )

        }
      } else {
        this.msgToast.showErrorMessage('error', '', "Please enter valid unit to allocate");
        return;
      }
    } else {
      this.msgToast.showErrorMessage('error', '', "Please enter inventory item to allocate");
      return;
    }

  }

  getAllocatedHistory() {
    this.allocatedItem = [];
    this.postService.getAllocatedHistory(this.student_id).subscribe(
      res => {
        this.allocatedItem = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteInventory(data) {
    if (confirm('Are you sure, you want to delete inventory?')) {
      this.postService.deleteInventory(data.allocation_id).subscribe(
        res => {
          this.msgToast.showErrorMessage('success', '', "Inventory deleted successfully");
          this.getAllocatedHistory();
          this.fetchInventoryList();
        }
      )
    }
  }

  uploadHandler() {
    if (this.category_id != '') {
      const preview = (<HTMLInputElement>document.getElementById('uploadFileControl')).files[0];
      if (preview != null || preview != undefined) {
        var myReader: FileReader = new FileReader();
        let temp: any = {};
        myReader.readAsDataURL(preview);
        myReader.onloadend = () => {
          temp = {
            "title": this.category_id,
            "fileName": preview.name,
            "encodedFile": (<string>myReader.result).split(',')[1]
          }
          this.selectedFiles.push(temp);
          this.msgToast.showErrorMessage('success', '', "File uploaded successfully");
          this.category_id = '';
          (<HTMLInputElement>document.getElementById('uploadFileControl')).value = null;
        }
      } else {
        this.msgToast.showErrorMessage('error', '', "No file selected");
      }
    } else {
      this.msgToast.showErrorMessage('error', '', "Document title is mandatory");
    }
  }

  deletefile(obj, id) {
    if (confirm('Are you sure, you want to delete file?')) {
      this.selectedFiles.splice(id, 1);
      this.msgToast.showErrorMessage('success', '', "File deleted successfully");
    }
  }
  fetchCourseListByStdId(standard_id){
    if(this.schoolModel){
      this.updateMasterCourseList(standard_id);
    }
  }
}



@Pipe({ name: "sortBy" })
export class SortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
  }
