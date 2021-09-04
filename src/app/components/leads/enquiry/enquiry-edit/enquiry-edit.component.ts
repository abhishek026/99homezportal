import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/Rx';
import { role } from '../../../../model/role_features';
import { addEnquiryForm } from '../../../../model/add-enquiry-form';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../../services/common-service';
import { PopupHandlerService } from '../../../../services/enquiry-services/popup-handler.service';
import { PostEnquiryDataService } from '../../../../services/enquiry-services/post-enquiry-data.service';
import { FetchprefilldataService } from '../../../../services/fetchprefilldata.service';
import { HttpService } from '../../../../services/http.service';
import { LoginService } from '../../../../services/login-services/login.service';
import { MultiBranchDataService } from '../../../../services/multiBranchdata.service';
import { ClosingReasonService } from '../../services/closing-reason.service';
import { CommonApiCallService } from '../../../../services/common-api-call.service';
import CommonUtils from '../../../../utils/commonUtils'

@Component({
  selector: 'app-enquiry-edit',
  templateUrl: './enquiry-edit.component.html',
  styleUrls: ['./enquiry-edit.component.scss']
})
export class EnquiryEditComponent implements OnInit {

  isConvertToStudent: boolean = false;
  /* Variable Declarations */
  enqstatus: any = [];
  enqPriority: any = [];
  enqFollowType: any = [];
  enqAssignTo: any = [];
  enqStd: any = [];
  enqSub: any = [];
  enqScholarship: any = [];
  enqSub2: any = [];
  school: any = [];
  sourceLead: any = [];
  refferedBy: any = [];
  occupation: any = [];
  lastDetail: any = [];
  confimationPop: boolean = false; res
  updatePop: boolean = false;
  isProfessional: boolean = false;
  institute_enquiry_id: any = '';
  editEnqData: addEnquiryForm = {
    name: "",
    country_id: "",
    state_id: "",
    city_id: "",
    area_id: "",
    phone: "",
    email: "",
    dob: '',
    gender: "",
    phone2: "",
    email2: "",
    curr_address: "",
    parent_name: "",
    parent_phone: "",
    parent_email: "",
    master_course_name: "",
    city: -1,
    area: -1,
    occupation_id: "-1",
    school_id: "-1",
    qualification: "",
    grade: "",
    enquiry_date: moment().format('YYYY-MM-DD'),
    standard_id: "-1",
    subject_id: "-1",
    subjectIdArray: null,
    referred_by: "-1",
    source_id: "-1",
    fee_committed: "",
    discount_offered: "",
    priority: "",
    enquiry: "",
    follow_type: "",
    followUpDate: "",
    religion: null,
    link: "",
    slot_id: null,
    closedReason: "",
    demo_by_id: "",
    status: "",
    assigned_to: "-1",
    followUpTime: "",
    lead_id: -1,
    enqCustomLi: [],
    source_instituteId: -1,
    walkin_followUpDate: '',
    walkin_followUpTime: '',
    courseIdArray: null,
    closing_reason_id: '-1',
    is_follow_up_time_notification: false,
    birth_place: '',
    blood_group: '-1',
    category: '-1',
    nationality: '',
    student_adhar_no: '',
    parent_adhar_no: '',
    parent_profession: '-1',
    mother_tounge: '-1',
    extra_curricular_activities: '',
    educational_group: '',
    pin_code: '',
    inst_acad_year_id: '-1',
    guardian_name: '',
    guardian_phone: '',
    guardian_email: '',
    address: ''

  };
  isUpdateComment: boolean = false;
  additionDetails: boolean = false;
  institute_id: any = "100123";
  todayDate: number = Date.now();
  isSourcePop: boolean = false;
  isInstitutePop: boolean = false;
  isRefferPop: boolean = false;
  componentPrefill: any = [];
  componentListObject: any = {};
  emptyCustomComponent: any;
  selectedComponent: any;
  componentRenderer: any = [];
  isCustomComponentValid: boolean = true;
  isFormValid: boolean = false;
  lastUpdated: any;
  errorMessage: any;
  submitError: boolean = false;
  addNextCheck: boolean = false;
  isEnquiryAdmin: boolean = false;
  updateFormComments: any[] = [];
  updateFormCommentsBy: any[] = [];
  updateFormCommentsOn: any[] = [];
  commentUpdater: any[] = [];
  private customComponents: any[] = [];
  /* Model for Enquiry Update Popup Form */
  updateFormData = {
    comment: "",
    status: "",
    statusValue: "",
    institution_id: sessionStorage.getItem('institute_id'),
    isEnquiryUpdate: "Y",
    closedReason: null,
    slot_id: null,
    priority: "",
    follow_type: "",
    followUpDate: "",
    commentDate: moment().format('YYYY-MM-DD'),
    followUpTime: "",
    isEnquiryV2Update: "N",
    isRegisterFeeUpdate: "N",
    amount: null,
    paymentMode: null,
    paymentDate: null,
    reference: null

  }
  hourArr: any[] = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  minArr: any[] = ['', '00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  meridianArr: any[] = ['', "AM", "PM"];
  hour: string = '';
  minute: string = '';
  meridian: string = ''
  times: any[] = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
  followUpTime: any = "";
  // City And Area Changes
  isCityMandatory: any;
  isStateMandatory: any;
  cityListDataSource: any = [];
  areaListDataSource: any = [];
  actualAssignee: any;
  isMainBranch: any = "N";
  branchesList: any = [];
  subBranchSelected: any = false;
  course_standard_id: any = '-1';
  course_subject: any[] = [];
  course_mastercourse_id: any = '-1';
  course_course: any[] = [];
  masterCourseData: any[] = [];
  closingReasonDataSource: any = [];
  closingReasonOpen: boolean = false;
  isNewRefer: boolean;
  instituteCountryDetObj: any = {};
  createNewReasonObj = {
    closing_desc: "",
    institution_id: this.service.institute_id
  };
  enquiryStatus: any = '0';
  walkintime: any = {
    hour: '',
    minute: ''
  }
  minuteArr: any[] = ['', '00', '15', '30', '45'];
  countryDetails: any = [];
  maxlength: any = 10;
  country_id: any = null;

  // state and city list
  stateList: any[] = [];
  cityList: any[] = [];
  areaList: any[] = [];
  addArea: boolean = false;
  selectedData = {
    country: '',
    state: '',
    city: ''
  };

  permission: boolean = false;
  role_feature = role.features;
  schoolModel: boolean = false;
  masterDataList: any = {};
  instAcademicYrList: any = [];
  /* Return to login if Auth fails else return to enqiury list if no row selected found, else store the rowdata to local variable */
  constructor(
    private prefill: FetchprefilldataService,
    private router: Router,
    private pops: PopupHandlerService,
    private poster: PostEnquiryDataService,
    private login: LoginService,
    private route: ActivatedRoute,
    private auth: AuthenticatorService,
    private multiBranchService: MultiBranchDataService,
    private service: ClosingReasonService,
    private commonServiceFactory: CommonServiceFactory,
    private httpService: HttpService,
    private commonApiCallService: CommonApiCallService) {

    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )

    if (sessionStorage.getItem('userid') == null) {
      this.showErrorMessage('error', 'User not logged-in', "Please login to continue");
      this.router.navigateByUrl('/login');
    }
    else {
      this.institute_enquiry_id = this.route.snapshot.paramMap.get('id');
      this.fetchCommentData(this.route.snapshot.paramMap.get('id'));
    }
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
      commonApiCallService.fetchMasterData().subscribe(data => {
        this.masterDataList = data;
      })
      if (this.schoolModel) {
      commonApiCallService.getAllFinancialYear().subscribe(data => {
        this.instAcademicYrList = data
      })
    }


  }


  /* OnInit Initialized */
  ngOnInit() {
    this.isCityMandatory = sessionStorage.getItem('enable_routing');
    this.isStateMandatory = sessionStorage.getItem('enable_routing');
    this.isEnquiryAdministrator();
    this.FetchEnquiryPrefilledData();
    this.updateEnquiryData()

    // Multi Branch Check
    this.auth.isMainBranch.subscribe(
      (value: any) => {
        this.isMainBranch = value;
        if (this.isMainBranch == "Y") {
          this.editEnqData.source_instituteId = sessionStorage.getItem('institute_id');
          this.multiBranchInstituteFound(this.editEnqData.source_instituteId);
        }
      }
    );

    this.multiBranchService.subBranchSelected.subscribe(
      res => {
        this.subBranchSelected = res;
        if (this.subBranchSelected) {
          this.editEnqData.source_instituteId = sessionStorage.getItem('institute_id');
          const mainBranchID = sessionStorage.getItem('mainBranchId');
          if (mainBranchID != null) {
            this.multiBranchInstituteFound(mainBranchID);
          }
        }
      }
    )
    console.log(this.editEnqData);
    this.fetchDataForCountryDetails();
    this.checklengthOfCountry();
  }

  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      this.maxlength = this.countryDetails[0].country_phone_number_length;
      this.country_id = this.countryDetails[0].id;
      console.log(this.countryDetails);
    }
  }

  getStateList() {
    if (this.editEnqData.country_id != "") {
      const url = `/api/v1/country/state?country_ids=${this.editEnqData.country_id}`
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.result.length > 0) {
            this.stateList = res.result[0].stateList;
          }
          if (this.editEnqData.state_id != "") {
            this.getCityList();
          }
        },
        err => {
          this.auth.hideLoader();
          this.showErrorMessage('error', '', err);
        }
      )
    }
  }

  // get city list as per state selection
  getCityList() {
    if (this.editEnqData.state_id != "" && this.editEnqData.state_id != "-1") {
      const url = `/api/v1/country/city?state_ids=${this.editEnqData.state_id}`
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.result.length > 0) {
            this.cityList = res.result[0].cityList;
            if (this.editEnqData.city_id != "") {
              this.getAreaList();
            }
          }
        },
        err => {
          this.auth.hideLoader();
          this.showErrorMessage('error', '', err);
        }
      )
    }
  }

  getAreaList() {
    // this.areaList = [];
    if (this.editEnqData.city_id != "" && this.editEnqData.city_id != "-1") {
      this.auth.showLoader();
      const url = `/api/v1/cityArea/area/${this.createNewReasonObj.institution_id}?city_ids=${this.editEnqData.city_id}`
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.result && res.result.length > 0) {
            this.areaList = res.result[0].areaList;
          }
        },
        err => {
          this.auth.hideLoader();
          this.showErrorMessage('error', '', err);
        }
      )
    }
  }

  toggleAddArea() {
    if (this.addArea) {
      this.addArea = false;
    }
    else {
      this.addArea = true;
      this.selectedData.country = this.editEnqData.country_id;
      this.selectedData.state = this.editEnqData.state_id;
      this.selectedData.city = this.editEnqData.city_id;
    }
  }

  resetStateCityArea() {
    this.stateList = [];
    this.cityList = [];
    this.areaList = [];
    this.editEnqData.state_id = "";
    this.editEnqData.city_id = "";
    this.editEnqData.area_id = "";
    this.getStateList();
  }
  getNewCityList() {
    this.cityList = [];
    this.areaList = [];
    this.editEnqData.city_id = "";
    this.editEnqData.area_id = "";
    this.getCityList()
  }

  getNewAreaList() {
    this.areaList = [];
    this.getAreaList();
  }

  checklengthOfCountry() {
    if (this.countryDetails.length <= 1) {
      this.countryDetails.forEach(element => {
        this.instituteCountryDetObj = element;
      }
      );
      this.editEnqData.country_id = this.instituteCountryDetObj.country_id;
      return true;
    }
    else {
      return false;
    }
  }
  onChangeObj(event) {
    console.log(event);
    this.countryDetails.forEach(element => {
      if (element.id == event) {
        this.instituteCountryDetObj = element;
        this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
        this.country_id = element.id;
      }
    }
    );
    this.resetStateCityArea();
  }

  timeChanges(ev, id) {
    //
    if (ev.split(' ')[0] != '') {
      this.hour = ev.split(' ')[0];
      this.meridian = ev.split(' ')[1];

      //console.log(this.hour + "" +this.meridian)
    }
    else {
      this.hour = '';
      this.meridian = '';
    }
    this.notifyMeCheckBoxChangesDetect();

  }
  /* set the enquiry feilds for Form */
  updateEnquiryData() {
    this.institute_enquiry_id = this.route.snapshot.paramMap.get('id');
    this.fetchCommentData(this.route.snapshot.paramMap.get('id'));
    let id = this.institute_enquiry_id;
    this.prefill.fetchEnquiryByInstituteID(id).subscribe(
      data => {
        this.editEnqData = data;
        console.log(data);
        this.editEnqData.enquiry_date = moment(data.enquiry_date).format("YYYY-MM-DD");
        if (data.followUpDate) {
          this.editEnqData.followUpDate = moment(data.followUpDate).format("YYYY-MM-DD");
        }
        if (data.walkin_followUpDate) {
          this.editEnqData.walkin_followUpDate = moment(data.walkin_followUpDate).format("YYYY-MM-DD");
        }
        // this.editEnqData.country_id = this.instituteCountryDetObj.country_id;
        this.countryDetails.forEach(element => {
          if (element.id == this.editEnqData.country_id) {
            this.instituteCountryDetObj = element;
            this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
            this.country_id = element.id;
          }
        });
        this.getStateList()

        this.enquiryStatus = data.status;
        if (this.editEnqData.courseIdArray != null && this.editEnqData.courseIdArray.length) {
          this.editEnqData.courseIdArray = this.editEnqData.courseIdArray.map(el => { return parseInt(el) });
        }
        if (this.editEnqData.subjectIdArray != null && this.editEnqData.subjectIdArray.length) {
          this.editEnqData.subjectIdArray = this.editEnqData.subjectIdArray.map(el => { return parseInt(el) });
        }
        this.actualAssignee = data.assigned_to;
        this.editEnqData.dob = this.editEnqData.dob == null ? null : this.editEnqData.dob;
        if (data.followUpTime != '' && data.followUpTime != null && data.followUpTime != " :") {
          let followUpDateTime = moment(data.followUpDate).format('YYYY-MM-DD') + " " + data.followUpTime;
          this.hour = moment(followUpDateTime).format('h');
          this.followUpTime = moment(followUpDateTime).format('h') + " " + moment(followUpDateTime).format('a').toString().toUpperCase();
          this.minute = moment(followUpDateTime).format('mm');
          this.meridian = moment(followUpDateTime).format('a').toString().toUpperCase();
        }

        if (data.walkin_followUpDate != "" && data.walkin_followUpDate != "Invalid date" && data.walkin_followUpDate != null) {
          this.editEnqData.walkin_followUpDate = moment(data.walkin_followUpDate).format("YYYY-MM-DD");
        }

        if (data.walkin_followUpTime != "" && data.walkin_followUpTime != null && data.walkin_followUpTime != ": ") {
          this.walkintime = this.breakTimeInToHrAndMin(data.walkin_followUpTime);
        }

        this.updateCustomComponent(id);
        this.fetchSubject(this.editEnqData.standard_id);
        if (!this.isProfessional) {
          this.prefill.getMasterCourseData().subscribe(
            (res: any) => {
              this.masterCourseData = res;
              if (this.editEnqData.courseIdArray != null && this.editEnqData.courseIdArray.length) {
                this.editEnqData.courseIdArray = this.editEnqData.courseIdArray.map(el => { return parseInt(el) });
              }
              this.courseMasterChange(this.editEnqData.master_course_name)
            });
        }
        else if (this.isProfessional) {

        }
        if (data.city != "" && data.city != null) {
          this.onCitySelctionChanges(data.city);
        }
        if (this.isMainBranch == 'Y' || this.subBranchSelected == true) {
          this.editEnqData.source_instituteId = sessionStorage.getItem('institute_id');
        }
      });
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  fetchMasterCourseDetails() {
    this.prefill.getMasterCourseData().subscribe(
      (res: any) => {
        this.masterCourseData = res;
      });
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  getCustomComponents(): any[] {
    let tempArr: any[] = [];
    this.customComponents.forEach(e => {
      if (e.type == 5) {
        if (e.hasOwnProperty('value')) {
          let dd = moment(e.value).format("YYYY-MM-DD");
          if (dd != '' && dd != "Invalid date" && dd != null) {
            let obj: any = {};
            obj.component_id = e.id;
            obj.enq_custom_id = e.data.enq_custom_id;
            obj.enq_custom_value = moment(e.value).format("YYYY-MM-DD");
            obj.comp_length = e.comp_length;
            tempArr.push(obj);
          }
        }
      }
      else {
        if (e.hasOwnProperty('value')) {
          if (typeof e.value == 'string') {
            if (e.value.trim() != '') {
              let obj: any = {};
              obj.component_id = e.id;
              obj.enq_custom_id = e.data.enq_custom_id;
              obj.enq_custom_value = e.value;
              obj.comp_length = e.comp_length;
              tempArr.push(obj);
            }
          }
          else if (typeof e.value == 'boolean') {
            if (e.value) {
              let obj: any = {};
              obj.component_id = e.id;
              obj.enq_custom_id = e.data.enq_custom_id;
              obj.enq_custom_value = "Y";
              obj.comp_length = e.comp_length;
              tempArr.push(obj);
            }
            else {
              let obj: any = {};
              obj.component_id = e.id;
              obj.enq_custom_id = e.data.enq_custom_id;
              obj.enq_custom_value = "N";
              obj.comp_length = e.comp_length;
              tempArr.push(obj);
            }
          }
        }
      }
    });
    return tempArr;
  }
  checkCustomeComponentElement(index) {
    if (!(index % 3)) {
      return true;
    }
    else {
      return false;
    }

  }
  fillCustomComponent(v, comp) {
    if (v) {
      this.customComponents.forEach(e => {
        if (e.id === comp.id) {
          e.value = v;
        }
      })
    }
    else {
      this.customComponents.forEach(e => {
        if (e.id === comp.id) {
          e.value = v;
        }
      })
    }
  }

  /* Function for Toggling Form Visibility */
  toggleForm(event) {
    let eleid = event.srcElement.id;
    //console.log(eleid);
    if (eleid == "openBasic") {
      var academic = document.getElementById('academicDetails').classList;
      academic.remove('active');
      var basic = document.getElementById('basicDetails').classList;
      basic.add('active');
    }
    else if (eleid == "closeBasic") {
      var basic = document.getElementById('basicDetails').classList;
      basic.remove('active');
      var academic = document.getElementById('academicDetails').classList;
      academic.add('active');
    }
    else if (eleid == "openAcademic") {
      var basic = document.getElementById('basicDetails').classList;
      //console.log(basic);
      basic.remove('active');
      var academic = document.getElementById('academicDetails').classList;
      //console.log(academic);
      academic.add('active');
    }
    else if (eleid == "closeAcademic") {
      var academic = document.getElementById('academicDetails').classList;
      academic.remove('active');
      var basic = document.getElementById('basicDetails').classList;
      basic.add('active');
    }
  }

  /* Function to fetch prefill data for form creation */
  FetchEnquiryPrefilledData() {

    this.prefill.getEnqStatus().subscribe(
      data => {
        this.enqstatus = data;
        console.log("data", data);
      },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getEnqPriority().subscribe(
      data => { this.enqPriority = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getFollowupType().subscribe(
      data => { this.enqFollowType = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getAssignTo().subscribe(
      data => { this.enqAssignTo = data; console.log("data", data); },
      err => {
        // console.log(err);
      }
    );

    this.prefill.getEnqStardards().subscribe(
      data => { this.enqStd = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getSchoolDetails().subscribe(
      data => { this.school = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getLeadSource().subscribe(
      data => { this.sourceLead = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getLeadReffered().subscribe(
      data => { this.refferedBy = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getOccupation().subscribe(
      data => { this.occupation = data; console.log("data", data); },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.fetchLastDetail().subscribe(
      data => {
        this.lastDetail = data;
        console.log("data", data);
        let createTime = new Date(data.enquiry_creation_datetime);
        this.lastUpdated = moment(createTime).fromNow();
      },
      err => {
        // console.log(err);
      }
    );

    this.prefill.getCityList().subscribe(
      data => {
        this.cityListDataSource = data;
        console.log("data", data);
      },
      err => {
        //console.log(err);
      }
    )

    this.getClosingReasons();

  }



  updateCustomComponent(id) {
    this.prefill.fetchCustomComponentById(id)
      .subscribe(
        data => {
          this.customComponents = [];
          if (data != null) {
            data.forEach(el => {
              let max_length = el.comp_length == 0 ? 100 : el.comp_length;
              let obj = {
                data: el,
                id: el.component_id,
                is_required: el.is_required,
                is_searchable: el.is_searchable,
                label: el.label,
                prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                selected: [],
                selectedString: '',
                type: el.type,
                value: el.enq_custom_value,
                comp_length: max_length
              }
              if (el.type == 4) {
                obj = {
                  data: el,
                  id: el.component_id,
                  is_required: el.is_required,
                  is_searchable: el.is_searchable,
                  label: el.label,
                  prefilled_data: this.createPrefilledDataType4(el.prefilled_data.split(','), el.enq_custom_value.split(','), el.defaultValue.split(',')),
                  selected: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? this.getDefaultArr(el.defaultValue) : el.enq_custom_value.split(','),
                  selectedString: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                  type: el.type,
                  value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                  comp_length: max_length
                }
              }
              if (el.type == 3) {
                obj = {
                  data: el,
                  id: el.component_id,
                  is_required: el.is_required,
                  is_searchable: el.is_searchable,
                  label: el.label,
                  prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                  selected: [],
                  selectedString: "",
                  type: el.type,
                  value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                  comp_length: max_length
                }
              }
              if (el.type == 2) {
                obj = {
                  data: el,
                  id: el.component_id,
                  is_required: el.is_required,
                  is_searchable: el.is_searchable,
                  label: el.label,
                  prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                  selected: [],
                  selectedString: '',
                  type: el.type,
                  value: el.enq_custom_value == "Y" ? true : false,
                  comp_length: max_length
                }
              }
              else if (el.type != 2 && el.type != 4 && el.type != 3) {
                obj = {
                  data: el,
                  id: el.component_id,
                  is_required: el.is_required,
                  is_searchable: el.is_searchable,
                  label: el.label,
                  prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                  selected: [],
                  selectedString: '',
                  type: el.type,
                  value: el.enq_custom_value,
                  comp_length: max_length
                }
              }

              this.customComponents.push(obj);
            });
          }
          this.emptyCustomComponent = this.componentListObject;
        },
        err => {
        });
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  getDefaultArr(d): any[] {
    let a: any[] = [];
    a.push(d);
    return a;
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
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
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */


  /* Custom Compoenent array creater */
  createPrefilledData(dataArr: any[]): any[] {
    let customPrefilled: any[] = [];
    dataArr.forEach(el => {
      let obj = {
        displayName: el.toString(), // this is display label
        data: el,// this is key for select dropdwon
        checked: false
      }
      customPrefilled.push(obj);
    });

    return customPrefilled;
  }




  /* if custom component is of type multielect then toggle the visibility of the dropdowm */
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






  /* if custom component is of type multielect then update the selected or unselected data*/
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







  /* Function to Toggle visibility of additional details div */
  showAdditionDetails() {
    this.additionDetails = !this.additionDetails;
  }




  /* Function to fetch subject when user selects a standard from dropdown */
  fetchSubject(value) {
    if (value != null && value != '' && value != '-1') {
      this.enqSub = [];
      this.editEnqData.standard_id = value;
      this.prefill.getEnqSubjects(this.editEnqData.standard_id).subscribe(
        data => {
          this.enqSub = data;
        }
      )
    }
    else {
      this.editEnqData.subject_id = '-1';
      this.editEnqData.subjectIdArray = [];
      this.enqSub = [];
    }
  }


  validateAreaAndCityFields() {
    if (this.isCityMandatory == 1 && this.isStateMandatory == 1) {
      if (this.editEnqData.state_id == "") {
        return this.showErrorMessage('error', '', 'Please enter State details');
      }
      else {
        if (this.editEnqData.city_id == '') {
          return this.showErrorMessage('error', '', 'Please enter City details');
        }
        else {
          return true;
        }
      }
    }
    else {
      return true;
    }
  }


  submitRegisterForm() {
    this.isConvertToStudent = true;
    this.editEnqData.follow_type = "Walkin"
    this.editEnqData.walkin_followUpDate = moment(new Date()).format('YYYY-MM-DD');
    this.editEnqData.walkin_followUpTime = this.getFollowupTime();
    this.submitForm();
  }


  /* Function to submit validated form data */
  submitForm() {
    //Validates if the custom component required fields are selected or not
    let customComponentValidator = this.validateCustomComponent();

    /* Validate the predefine required fields of the form */
    this.isFormValid = this.ValidateFormDataBeforeSubmit();

    // Validate If Area And City Settings is enable
    let validate = this.validateAreaAndCityFields();
    if (validate == false) {
      return;
    }

    // Validate if closing reason is given for closed enquiry
    if (this.editEnqData.status == '1') {
      if (this.editEnqData.closing_reason_id == "0" || this.editEnqData.closing_reason_id == '-1') {
        this.showErrorMessage('error', '', 'Please enter closing reason of enquiry.');
        return;
      }
    }

    if (CommonUtils.isOptionalValidEmailId(this.editEnqData.email)) {
      this.showErrorMessage('error', '', "Please enter valid email id");
      return;
    }
    if (CommonUtils.isOptionalValidEmailId(this.editEnqData.email2)) {
      this.showErrorMessage('error', '', "Please enter valid alternate email ID");
      return;
    }
    if (CommonUtils.isOptionalValidEmailId(this.editEnqData.parent_email)) {
      this.showErrorMessage('error', '', "Please enter valid parent email ID");
      return;
    }
    if (CommonUtils.isOptionalValidEmailId(this.editEnqData.guardian_email)) {
      this.showErrorMessage('error', '', "Please enter valid guardian email ID");
      return;
    }

    /* Upload Data if the formData is valid */
    if (this.isFormValid && customComponentValidator) {

      if (this.validateTime()) {
        let id = this.institute_enquiry_id;
        if (this.hour != '') {
          this.editEnqData.followUpTime = this.hour + ":" + this.minute + " " + this.meridian;
        }
        this.editEnqData.enqCustomLi = this.getCustomComponents();
        this.editEnqData.dob = this.fetchDate(this.editEnqData.dob);
        this.editEnqData.enquiry_date = this.fetchDate(this.editEnqData.enquiry_date);
        this.editEnqData.followUpDate = this.fetchDate(this.editEnqData.followUpDate);
        this.editEnqData.parent_email = (this.editEnqData.parent_email) ? this.editEnqData.parent_email.trim() : '';
        this.editEnqData.email2 = (this.editEnqData.email2) ? this.editEnqData.email2.trim() : '';
        this.editEnqData.email = this.editEnqData.email.trim();
        this.editEnqData.guardian_email = (this.editEnqData.guardian_email) ? this.editEnqData.guardian_email.trim() : '';

        if (this.editEnqData.courseIdArray == '-1') {
          this.editEnqData.courseIdArray = null;
        }

        if (this.editEnqData.subjectIdArray == '-1') {
          this.editEnqData.courseIdArray = null;
        }

        if (this.editEnqData.standard_id == '-1') {
          this.editEnqData.standard_id = null;
        }

        /* isMainBranch,subBranchSelected */
        if (this.isMainBranch == "N" && this.subBranchSelected == false) {
          this.editEnqData.source_instituteId = '-1';
        }

        else if (this.isMainBranch == "Y" && this.subBranchSelected == false) {
          this.editEnqData.source_instituteId = this.editEnqData.source_instituteId;
        }

        if (this.isConvertToStudent == false) {
          if (this.editEnqData.walkin_followUpDate == "" || this.editEnqData.walkin_followUpDate == "Invalid date") {
            this.editEnqData.walkin_followUpDate = "";
          } else {
            this.editEnqData.walkin_followUpDate = moment(this.editEnqData.walkin_followUpDate).format('YYYY-MM-DD');
          }

          if (this.walkintime.hour == "" || this.walkintime.minute == "") {
            this.editEnqData.walkin_followUpTime = "";
          } else {
            if (this.walkintime.hour != "") {
              let time = this.walkintime.hour.split(' ');
              this.editEnqData.walkin_followUpTime = time[0] + ':' + this.walkintime.minute + " " + time[1];
            }
          }
        }

        if (this.editEnqData.follow_type == "Walkin") {
          if (this.editEnqData.walkin_followUpDate == "") {
            this.showErrorMessage('error', '', 'Please enter walkin date for follow up type walkin');
            return;
          }

          if (this.editEnqData.walkin_followUpTime == "") {
            this.showErrorMessage('error', '', 'Please enter walkin time for follow up type walkin');
            return;
          }
        }

        this.enquiryStatus = this.editEnqData.status;

        if (this.editEnqData.is_follow_up_time_notification == true) {
          this.editEnqData.is_follow_up_time_notification = 1
        }
        else {
          this.editEnqData.is_follow_up_time_notification = 0
        }
        this.poster.editFormUpdater(id, this.editEnqData).subscribe(
          (data: any) => {
            if (data.statusCode == 200) {
              this.showErrorMessage('success', "", 'Enquiry updated successfully');
              if (this.isConvertToStudent) {
                let obj: any = {
                  name: this.editEnqData.name,
                  phone: this.editEnqData.phone,
                  email: this.editEnqData.email,
                  gender: this.editEnqData.gender,
                  dob: this.fetchDate(this.editEnqData.dob),
                  parent_email: this.editEnqData.parent_email,
                  parent_name: this.editEnqData.parent_name,
                  parent_phone: this.editEnqData.parent_phone,
                  enquiry_id: this.institute_enquiry_id,
                  institute_enquiry_id: this.institute_enquiry_id,
                  school_id: this.editEnqData.school_id,
                  country_id: this.editEnqData.country_id,
                  assigned_to: this.editEnqData.assigned_to,
                  curr_address : this.editEnqData.curr_address,
                  state_id: this.editEnqData.state_id,
                  area_id: this.editEnqData.area_id,
                  city_id: this.editEnqData.city_id,
                  comments: this.editEnqData.enquiry,

                }
                  obj.birth_place = this.editEnqData.birth_place,
                    obj.blood_group = this.editEnqData.blood_group,
                    obj.category = this.editEnqData.category,
                    obj.nationality = this.editEnqData.nationality,
                    obj.student_adhar_no = this.editEnqData.student_adhar_no,
                    obj.parent_adhar_no = this.editEnqData.parent_adhar_no,
                    obj.parent_profession = this.editEnqData.parent_profession,
                    obj.mother_tounge = this.editEnqData.mother_tounge,
                    obj.extra_curricular_activities = this.editEnqData.extra_curricular_activities,
                    obj.educational_group = this.editEnqData.educational_group,
                    obj.pin_code = this.editEnqData.pin_code,
                    obj.student_perm_addr = this.editEnqData.address,
                    obj.guardian_name = this.editEnqData.guardian_name,
                    obj.guardian_email = this.editEnqData.guardian_email,
                    obj.guardian_phone = this.editEnqData.guardian_phone,
                    obj.religion = this.editEnqData.religion
                if (!this.isProfessional) {
                  obj.standard_id = this.editEnqData.standard_id;
                } else {
                  obj.standard_id = this.editEnqData.master_course_name;
                }

                sessionStorage.setItem('studentPrefill', JSON.stringify(obj));
                this.router.navigate(['/view/students/add']);
              }
              else {
                this.clearLocalAndRoute()
              }
            }
            else if (data.statusCode != 200) {
              this.showErrorMessage('error', '', data.message);
            }
          },
          err => {
            this.showErrorMessage('error', "Error updating Enquiry", err.error.message);

          }
        );
      }
      else {

        this.showErrorMessage('error', '', 'Please select a valid time for follow up');
      }
    }
  }


  getFollowupTime(): any {
    let hour: any = parseInt(moment(new Date()).format('hh'));
    let min: any = moment(new Date()).format('mm');
    let mer: any = moment(new Date()).format('A');

    if (parseInt(min) % 5 != 0) {
      min = Math.ceil(parseInt(min) / 5) * 5;
      if (min >= 60) {
        min = '00';
        if (hour == 12) {
          hour = '1';
          if (mer == 'AM') {
            mer = 'PM';
          }
          else {
            mer = 'AM';
          }
        }
        else {
          hour += 1;
          //let formattedNumber = (hour).slice(-2);
          hour = hour.toString();
        }
      }
    }

    return (hour + ":" + min + " " + mer);
  }



  fetchDate(e): string {
    if (e == null || e == '' || e == "Invalid date") {
      return '';
    }
    else {
      return moment(e).format('YYYY-MM-DD');
    }
  }


  validateTime(): boolean {
    /* some time selected by user or nothing*/
    if ((this.hour != '' && this.minute != '' && this.meridian != '') || (this.hour == '' && this.minute == '' && this.meridian == '')) {
      if (this.hour == "Invalid date") { this.hour = ''; }
      if (this.minute == "Invalid date") { this.minute = ''; }
      if (this.meridian == "INVALID DATE") { this.meridian = ''; }
      return true;
    }
    else {
      return false;
    }
  }


  validateCustomComponent(): boolean {

    let temp: boolean = true;

    this.customComponents.forEach(el => {
      //console.log(el);
      if (el.is_required == 'Y' && el.value == '') {
        if (temp) {
          temp = false;
        }
      }
    });

    if (!temp) {
      this.showErrorMessage('error', 'Please add required field(s) in academics details section', '');
    }

    return temp;
  }

  /* Validate the Entire FormData Once Before Uploading= */
  ValidateFormDataBeforeSubmit(): boolean {
    // this.editEnqData.enquiry_date = moment(this.editEnqData.enquiry_date).format("YYYY-MM-DD");
    let phoneFlag = this.commonServiceFactory.phonenumberCheck(this.editEnqData.phone, this.maxlength, this.country_id);
    if (this.commonServiceFactory.valueCheck(this.editEnqData.name.trim())) {
      return this.showErrorMessage('error', 'Please enter name', '');
    } else if (phoneFlag == 'noNumber') {
      return this.showErrorMessage('error', 'Please enter contact no.', '');
    } else if (phoneFlag == false) {
      let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
      return this.showErrorMessage('error', msg, '');
    }
    // } else if (this.commonServiceFactory.checkValueType(this.editEnqData.enquiry_date)) {
    //   return this.showErrorMessage('error', 'Please select enquiry date ', '');
    // } 
    else if (this.commonServiceFactory.sourceValueCheck(this.editEnqData.source_id)) {
      return this.showErrorMessage('error', 'Please select enquiry source', '');
    } else if (this.editEnqData.parent_phone != "" || this.editEnqData.parent_phone != null) {
      let parentPhoneCheck = this.commonServiceFactory.phonenumberCheck(this.editEnqData.parent_phone, this.maxlength, this.country_id);
      if (parentPhoneCheck == false) {
        let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
        return this.showErrorMessage('error', msg, '');
      } else {
        return true;
      }
    } else if (this.editEnqData.phone2 != "" || this.editEnqData.phone2 != null) {
      let alternatePhoneCheck = this.commonServiceFactory.phonenumberCheck(this.editEnqData.phone2, this.maxlength, this.country_id);
      if (alternatePhoneCheck == 'noNumber') {
        return this.showErrorMessage('error', 'Please enter valid contact no.', '');
      } else if (alternatePhoneCheck == false) {
        let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
        return this.showErrorMessage('error', msg, '');
      } else {
        return true;
      }
    } else {
      if (this.validateEnquiryDate()) {
        return true;
      } else {
        return this.showErrorMessage('error', '', 'Cannot set future enquiry date');
      }
    }
  }

  showErrorMessage(objType, massage, body) {
    this.commonServiceFactory.showErrorMessage(objType, massage, body);
    return false;
  }

  validateEnquiryDate() {
    let a = moment();
    let b = moment(this.editEnqData.enquiry_date);
    let d = a.diff(b);
    if (d < 0) {
      return false;
    }
    else {
      return true;
    }
  }

  /* Function to store the data of Custom Component in to Base64 encoded array string */
  customComponentUpdated(val, data) {
    this.componentListObject[data.component_id].enq_custom_value = val;
  }




  /* Function to clear the form data */
  clearFormData() {
    this.editEnqData = {
      name: "",
      phone: "",
      email: "",
      gender: "",
      phone2: "",
      email2: "",
      curr_address: "",
      parent_name: "",
      parent_phone: "",
      parent_email: "",
      city: -1,
      area: -1,
      occupation_id: "-1",
      school_id: "-1",
      master_course_name: "",
      qualification: "",
      grade: "",
      enquiry_date: moment().format('YYYY-MM-DD'),
      dob: '',
      standard_id: "-1",
      subject_id: "-1",
      subjectIdArray: [],
      referred_by: "-1",
      source_id: "-1",
      fee_committed: "",
      discount_offered: "",
      priority: "",
      enquiry: "",
      follow_type: "",
      followUpDate: "",
      religion: null,
      link: "",
      slot_id: null,
      closedReason: "",
      demo_by_id: "",
      status: "",
      assigned_to: "-1",
      followUpTime: "",
      lead_id: -1,
      enqCustomLi: [],
      walkin_followUpDate: '',
      walkin_followUpTime: '',
      closing_reason_id: '-1'
    }
    this.course_standard_id = '-1'
    this.course_mastercourse_id = '-1';
    this.hour = '';
    this.minute = '';
    this.meridian = '';
    this.customComponents.forEach(el => {
      el.value = '';
    });
    this.walkintime = {
      hour: '',
      minute: ''
    };
  }



  clearLocalAndRoute() {
    this.clearFormData();
    sessionStorage.removeItem('institute_enquiry_id');
    this.router.navigateByUrl('/view/leads/enquiry');
  }


  commentHandlerOpen() {
    this.isUpdateComment = true;
  }

  commentHandlerClose() {
    this.isUpdateComment = false;
    this.updateFormData = {
      comment: "",
      status: "",
      statusValue: "",
      institution_id: sessionStorage.getItem('institute_id'),
      isEnquiryUpdate: "Y",
      closedReason: null,
      slot_id: null,
      priority: "",
      follow_type: "",
      followUpDate: "",
      commentDate: moment().format('YYYY-MM-DD'),
      followUpTime: "",
      isEnquiryV2Update: "N",
      isRegisterFeeUpdate: "N",
      amount: null,
      paymentMode: null,
      paymentDate: null,
      reference: null,
    }
  }

  fetchCommentData(id) {
    this.prefill.fetchCommentsForEnquiry(id).subscribe((res: any) => {
      this.updateFormData.priority = res.priority;
      this.updateFormData.follow_type = res.follow_type;
      this.updateFormData.statusValue = res.statusValue;
      this.updateFormData.status = res.status;
      this.updateFormData.followUpDate = res.followUpDate;
      this.updateFormData.commentDate = moment(res.commentDate).format('YYYY-MM-DD');
      if (res.comments != null) {
        this.updateFormComments = res.comments;
      }
      this.updateFormCommentsOn = res.commentedOn;
      this.updateFormCommentsBy = res.commentedBy;
    });

  }

  notifyMeCheckBoxChangesDetect() {
    if (this.editEnqData.followUpDate != "" && this.editEnqData.followUpDate != null) {
      if (this.hour != "" && this.meridian != "" && this.minute != "") {
        // Do nothing
      } else {
        this.editEnqData.is_follow_up_time_notification = false;
      }
    } else {
      this.editEnqData.is_follow_up_time_notification = false;
    }
  }

  pushUpdatedEnquiry() {
    let id = this.institute_enquiry_id;
    this.updateFormData.comment = this.updateFormData.comment;
    this.poster.updateEnquiryForm(id, this.updateFormData)
      .subscribe(res => {
        this.showErrorMessage('success', 'Enquiry Updated', '')
        this.fetchCommentData(this.route.snapshot.paramMap.get('id'));
        this.commentHandlerClose();
      },
        err => {
          this.showErrorMessage('error', 'Failed To Update Enquiry', err.error.message);
        })

  }


  isEnquiryAdministrator() {
    if (sessionStorage.getItem('permissions') == null || sessionStorage.getItem('permissions') == undefined
      || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('username') == 'admin') {
      this.isEnquiryAdmin = true;
    }
    else {
      let permissions: any[] = [];
      permissions = JSON.parse(sessionStorage.getItem('permissions'));
      /* User has permission to view all enquiries */
      if (this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
        this.isEnquiryAdmin = true;
      }
      /* User is not authorized as enquiry admin and see only enquiry assigned to him */
      else {
        this.isEnquiryAdmin = false;
      }
    }
  }





  clearEditEnquiryDate() {
    this.editEnqData.enquiry_date = "";
  }

  clearEditFollowUpDate() {
    this.editEnqData.followUpDate = "";
    this.hour = '';
    this.minute = '';
    this.meridian = '';
  }

  onCitySelctionChanges(event) {
    this.areaListDataSource = [];
    if (event != -1 && event != "" && event != null) {
      let obj = {
        city: event
      }
      this.prefill.getAreaList(obj).subscribe(
        res => {
          this.areaListDataSource = res;
        },
        err => {
          //console.log(err);
        }
      )
    }
  }

  multiBranchInstituteFound(id) {
    this.prefill.getAllSubBranches(id).subscribe(
      (res: any) => {
        this.branchesList = res;
      },
      err => {
        console.log(err);
      }
    )
  }


  branchUpdated(e) {
    this.editEnqData.source_instituteId = e;
    let sessid = sessionStorage.getItem('institute_id');
    this.prefill.fetchAssignedToData(e).subscribe(
      res => {
        this.enqAssignTo = res;
        if (sessid == e) {
          this.editEnqData.assigned_to = this.actualAssignee;
        }
        else {
          this.editEnqData.assigned_to = "-1";
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  courseMasterChange(e) {
    if (e != '-1') {
      this.masterCourseData.map(el => {
        if (el.master_course == e) {
          if (el.coursesList == null || el.coursesList.length == 0) {
            this.course_course = [];
          }
          else {
            this.course_course = el.coursesList;
          }
        }
      });
    }
    else {
      this.course_course = [];
    }
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */



  // Closing Reason Pop Up Function

  getClosingReasons() {
    this.prefill.getClosingReasons().subscribe(
      res => {
        this.closingReasonDataSource = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  closingReason() {
    this.closingReasonOpen = true;
  }

  closeClosingReason() {
    this.closingReasonOpen = false
  }

  toggleReferAdd() {
    let icon = document.getElementById('add-refer-icon').innerHTML;
    if (icon == '+') {
      this.isNewRefer = true;
      document.getElementById('add-refer-icon').innerHTML = '-';
    }
    else if (icon == '-') {
      this.isNewRefer = false;
      document.getElementById('add-refer-icon').innerHTML = '+';
    }
  }

  createNewReason() {
    if (this.createNewReasonObj.closing_desc == "") {
      this.showErrorMessage('error', '', "Closing reason can't be empty");
    }

    else {
      this.service.createReason(this.createNewReasonObj).subscribe(
        (data: any) => {
          this.showErrorMessage('success', '', 'Reason created successfully');
          this.getClosingReasons();
          this.isNewRefer = false;
          document.getElementById('add-refer-icon').innerHTML = '+';
          this.createNewReasonObj.closing_desc = ""
        },
        (error: any) => {
          this.errorMessage(error);
        }
      )
    }
  }

  editRowTable(row, index) {
    document.getElementById(("reason" + index).toString()).classList.remove('displayComp');
    document.getElementById(("reason" + index).toString()).classList.add('editComp');
  }

  saveInformation(row, index) {
    let obj = {
      closing_desc: row.closing_desc,
      institution_id: this.service.institute_id
    }
    if (row.closing_desc == "") {
      this.showErrorMessage('error', '', "Closing reason can't be empty");
    }
    else {
      this.service.updateClosingReason(obj, row.closing_reason_id).subscribe(
        (data: any) => {
          this.showErrorMessage('success', '', "Reason updated successfully");
          this.getClosingReasons();
        },
        err => {
          this.errorMessage(err);
        }
      )
    }
  }

  cancelEditRow(index) {
    document.getElementById(("reason" + index).toString()).classList.add('displayComp');
    document.getElementById(("reason" + index).toString()).classList.remove('editComp');
  }

  breakTimeInToHrAndMin(time) {
    let obj: any = {
      hour: '',
      minute: ''
    };
    obj.hour = time.split(':')[0] + " " + time.split(':')[1].split(' ')[1];
    obj.minute = time.split(':')[1].split(' ')[0];
    return obj;
  }

}
