import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/Rx';
import { addEnquiryForm } from '../../../model/add-enquiry-form';
import { role } from '../../../model/role_features';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../services/common-service';
import { PostEnquiryDataService } from '../../../services/enquiry-services/post-enquiry-data.service';
import { FetchprefilldataService } from '../../../services/fetchprefilldata.service';
import { HttpService } from '../../../services/http.service';
import { LoginService } from '../../../services/login-services/login.service';
import { MultiBranchDataService } from '../../../services/multiBranchdata.service';
import { CommonApiCallService } from '../../../services/common-api-call.service';
import CommonUtils from '../../../utils/commonUtils'

@Component({
  selector: 'app-enquiry-add',
  templateUrl: './enquiry-add.component.html',
  styleUrls: ['./enquiry-add.component.scss']
})
export class EnquiryAddComponent implements OnInit, OnDestroy {

  isRegisterStudent: boolean = false;
  /* Variable Declarations */
  countryDetails: any = [];
  enqstatus: any = [];
  enqPriority: any = [];
  enqFollowType: any = [];
  enqAssignTo: any = [];
  enqStd: any = [];
  isProfessional: boolean = false;
  enqSub: any = [];
  enqScholarship: any = [];
  enqSub2: any = [];
  school: any = [];
  sourceLead: any = [];
  occupation: any = [];
  lastDetail: any = {
    name: '',
    enquiry_no: null,
    enquiry_creation_datetime: null,
  };
  enquiryConfirm: any = [];
  confimationPop: boolean = false;
  updatePop: boolean = false;
  newEnqData: addEnquiryForm =
    {
      name: "",
      country_id: "",
      state_id: "",
      city_id: "",
      area_id: "",
      phone: "",
      email: "",
      gender: "",
      phone2: "",
      email2: "",
      dob: null,
      curr_address: "",
      parent_name: "",
      parent_phone: "",
      parent_email: "",
      city: -1,
      area: -1,
      occupation_id: "-1",
      school_id: "-1",
      qualification: "",
      grade: "",
      enquiry_date: moment().format('YYYY-MM-DD'),
      standard_id: "-1",
      subject_id: "-1",
      referred_by: "-1",
      source_id: "-1",
      fee_committed: "",
      discount_offered: "",
      priority: "cold_call",
      enquiry: "",
      follow_type: "call",
      followUpDate: moment().format('YYYY-MM-DD'),
      religion: null,
      link: "",
      slot_id: null,
      closedReason: "",
      master_course_name: "",
      demo_by_id: "",
      status: "0",
      subjectIdArray: null,
      assigned_to: sessionStorage.getItem('userid'),
      followUpTime: "",
      lead_id: -1,
      enqCustomLi: [],
      source_instituteId: '-1',
      walkin_followUpDate: '',
      walkin_followUpTime: '',
      closing_reason_id: '',
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
  additionDetails: boolean = false;
  todayDate: number = Date.now();
  isSourcePop: boolean = false;
  isInstitutePop: boolean = false;
  isReferPop: boolean = false;
  newEnquiryFormGroup: FormGroup;
  componentPrefill: any = [];
  componentListObject: any = {};
  emptyCustomComponent: any;
  componentRenderer: any = [];
  isCustomComponentValid: boolean = true;
  isCustomComponentStillValid: boolean = false;
  isFormValid: boolean = false;
  lastUpdated: any;
  errorMessage: any;
  submitError: boolean = false;
  addNextCheck: boolean = false;
  isEnquiryAdmin: boolean = false;
  isNewInstitute: boolean = true;
  customComponents: any[] = [];
  instituteList: any;
  isNewSource: boolean = true;
  sourceList: any = [];
  isNewRefer: boolean = true;
  referList: any = [];
  minArr: any[] = ['', '00', '15', '30', '45'];
  hour: string = '';
  minute: string = '';
  meridian: string = ''
  times: any[] = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']
  timeObj: any = {
    fhour: '',
    fminute: '',
    fmeridian: '',
    whour: '',
    wminute: '',
    wmeridian: '',
  };
  followUpTime: any = "";
  createInstitute = {
    instituteName: "",
    isActive: "Y"
  }
  createSource = {
    name: "",
    inst_id: sessionStorage.getItem('institute_id'),
  }
  createReferer = {
    name: "",
    inst_id: sessionStorage.getItem('institute_id')
  }
  isStateMandatory: any;
  isCityMandatory: any;
  cityListDataSource: any = [];
  areaListDataSource: any = [];
  course_standard_id: any = '-1';
  course_subject: any[] = [];
  course_mastercourse_id: any = '-1';
  course_course: any[] = [];
  isMainBranch: any = "N";
  branchesList: any = [];
  subBranchSelected: any = false;
  masterCourseData: any[] = [];
  selectedCourseIds: any = null;
  selectedSubjectIds: any = null;
  isEnquirySubmit: boolean = true;
  permissionList: any;
  permission: boolean = false;
  instituteCountryDetObj: any = {};
  maxlength: any = 10;
  country_id: any = null;
  walkinTime: any = {
    hour: '',
    minute: ''
  }
  minuteArr: any[] = ['', '00', '15', '30', '45'];
  addCityAreaPopUp: any = {
    showPopUp: false,
    addNew: false,
    newCity: {
      city: '',
      area: '',
      branch: '-1'
    }
  };

  isRippleLoad: boolean = false;
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
  convertEnquiry: boolean = false;
  role_feature = role.features;
  schoolModel: boolean = false;
  // Changes by - Nalini to hide Add bulk Enquiry and Upload Enq for custom user (As discussed with Nitin)
  BulkEnqHide: boolean = false;
  masterDataList: any = {};
  instAcademicYrList: any = [];


  constructor(
    private prefill: FetchprefilldataService,
    private router: Router,
    private poster: PostEnquiryDataService,
    private login: LoginService,
    private auth: AuthenticatorService,
    private multiBranchService: MultiBranchDataService,
    private commonServiceFactory: CommonServiceFactory,
    private httpService: HttpService,
    private commonApiCallService: CommonApiCallService
  ) {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
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
    if (sessionStorage.getItem('userid') == null) {
      this.router.navigate(['/authPage']);
    }
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
    if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('permissions') == null || this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
      this.permission = false;
      this.BulkEnqHide = true;
    }
    else {
      this.BulkEnqHide = this.role_feature.LEAD_ENQUIRY_FULL_ACCESS;
      if (JSON.parse(sessionStorage.getItem('permissions')).length == 1) {
        if (this.role_feature.LEAD_MANAGE_ENQUIRY)
          this.permission = true;
      }
    }
    this.isEnquiryAdministrator();
    this.fetchEnquiryPrefilledData();

    /* Model for Enquiry Data */
    this.newEnqData = {
      name: "",
      country_id: "",
      state_id: "",
      city_id: "",
      area_id: "",
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
      qualification: "",
      grade: "",
      master_course_name: "",
      enquiry_date: moment().format('YYYY-MM-DD'),
      standard_id: "-1",
      subject_id: "-1",
      subjectIdArray: null,
      referred_by: "-1",
      source_id: "-1",
      fee_committed: "",
      discount_offered: "",
      priority: "cold_call",
      enquiry: "",
      follow_type: "call",
      followUpDate: moment().format('YYYY-MM-DD'),
      religion: null,
      link: "",
      slot_id: null,
      closedReason: "",
      demo_by_id: "",
      status: "0",
      assigned_to: sessionStorage.getItem('userid'),
      followUpTime: "",
      lead_id: -1,
      enqCustomLi: [],
      source_instituteId: '-1',
      walkin_followUpDate: '',
      walkin_followUpTime: '',
      closing_reason_id: '',
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

    if (sessionStorage.getItem('enquiryPrefill') != null && sessionStorage.getItem('enquiryPrefill') != undefined) {
      this.convertToEnquiryDetected();
    }

    // Multi Branch Check
    this.auth.isMainBranch.subscribe(
      (value: any) => {
        this.isMainBranch = value;
        if (this.isMainBranch == "Y") {
          this.newEnqData.source_instituteId = sessionStorage.getItem('institute_id');
          this.multiBranchInstituteFound(this.newEnqData.source_instituteId);
        }
      }
    );

    this.multiBranchService.subBranchSelected.subscribe(
      res => {
        this.subBranchSelected = res;
        if (this.subBranchSelected) {
          this.newEnqData.source_instituteId = sessionStorage.getItem('institute_id');
          const mainBranchId = sessionStorage.getItem('mainBranchId');
          if (mainBranchId != null) {
            this.multiBranchInstituteFound(mainBranchId);
          }
        }
      }
    )

    this.fetchDataForCountryDetails();
    this.getStateList();

  }

  ngOnDestroy() {
    sessionStorage.removeItem('enquiryPrefill');
  }
  checkCustomeComponentElement(index) {
    if (!(index % 3)) {
      return true;
    }
    else {
      return false;
    }

  }
  convertToEnquiryDetected() {
    this.convertEnquiry = true;
    let data = JSON.parse(sessionStorage.getItem('enquiryPrefill'));
    this.newEnqData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      dob: data.dob,
      parent_email: data.parent_email,
      standard_id: data.standard_id,
      parent_name: data.parent_name,
      parent_phone: data.parent_phone,
      school_id: data.school_id,
      curr_address: data.address,
      country_id: data.country_id,
      walkin_followUpDate: '',
      walkin_followUpTime: '',
      closing_reason_id: '',
      user_id: data.user_id,
      city_id: data.city_id,
      state_id: data.state_id,
      source_id: data.source,
      enquiry_date: moment().format('YYYY-MM-DD'),
      status: '0'
    }
    this.course_mastercourse_id = data.master_course;
    this.selectedCourseIds = data.course_assign;
  }

  // created by: Nalini Walunj
  // Below three functions are written to fetch country details from the session stored at the time of login of institute
  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      let defacult_Country = this.countryDetails.filter((country) => {
        return country.is_default == 'Y';
      })

      if (this.newEnqData.country_id == "") {
        this.newEnqData.country_id = defacult_Country[0].id;
        this.instituteCountryDetObj = defacult_Country[0];
        this.maxlength = defacult_Country[0].country_phone_number_length;
        this.country_id = defacult_Country[0].id;
      }
    }
  }


  getStateList() {
    const url = `/api/v1/country/state?country_ids=${this.newEnqData.country_id}`
    this.auth.showLoader();
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res.result.length > 0) {
          this.stateList = res.result[0].stateList;
        }
      },
      err => {
        this.auth.hideLoader();
        this.showErrorMessage('error', '', err);
      }
    )
  }


  resetStateCityArea() {
    this.stateList = [];
    this.cityList = [];
    this.areaList = [];
    this.newEnqData.state_id = "";
    this.newEnqData.city_id = "";
    this.newEnqData.area_id = "";
    this.getStateList();
  }
  getNewCityList() {
    this.cityList = [];
    this.areaList = [];
    this.newEnqData.city_id = "";
    this.newEnqData.area_id = "";
    this.getCityList()
  }

  getNewAreaList() {
    this.areaList = [];
    this.getAreaList();
  }

  // get city list as per state selection
  getCityList() {
    if(this.newEnqData.state_id != '') {
    const url = `/api/v1/country/city?state_ids=${this.newEnqData.state_id}`
    this.auth.showLoader();
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res.result.length > 0) {
          this.cityList = res.result[0].cityList;
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
    if (this.newEnqData.city_id != "" && this.newEnqData.city_id != "-1") {
    const url = `/api/v1/cityArea/area/${this.createSource.inst_id}?city_ids=${this.newEnqData.city_id}`
    this.auth.showLoader();
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
      this.getAreaList();
    }
    else {
      this.addArea = true;
      this.selectedData.country = this.newEnqData.country_id;
      this.selectedData.state = this.newEnqData.state_id;
      this.selectedData.city = this.newEnqData.city_id;

    }
  }

  onChangeObj(event) {
    console.log(event);
    this.countryDetails.forEach(element => {
      if (element.id == event) {
        this.instituteCountryDetObj = element;
        this.newEnqData.country_id = element.id;
        this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
        this.country_id = element.id;
      }
    });
    this.resetStateCityArea();
  }

  /* Function for Toggling Form Visibility */
  toggleForm(event) {
    let eleid = event.srcElement.id;
    //console.log(eleid);
    if (eleid == "openBasic") {
      this.toggleObjectClass(document.getElementById('basicDetails').classList, document.getElementById('academicDetails').classList);
    }
    else if (eleid == "closeBasic") {
      this.toggleObjectClass(document.getElementById('academicDetails').classList, document.getElementById('basicDetails').classList);
    }
    else if (eleid == "openAcademic") {
      this.toggleObjectClass(document.getElementById('academicDetails').classList, document.getElementById('basicDetails').classList);
    }
    else if (eleid == "closeAcademic") {
      this.toggleObjectClass(document.getElementById('basicDetails').classList, document.getElementById('academicDetails').classList);
    }
  }

  toggleObjectClass(addActive: any, removeActive: any) {
    addActive.add('active');
    removeActive.remove('active');
  }



  /* Function to fetch prefill data for form creation */
  fetchEnquiryPrefilledData() {
    this.prefill.getEnqStatus().subscribe(
      data => { this.enqstatus = data; },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getEnqPriority().subscribe(
      data => { this.enqPriority = data; },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getFollowupType().subscribe(
      data => { this.enqFollowType = data },
      err => { });

    this.prefill.getAssignTo().subscribe(
      data => { this.enqAssignTo = data; },
      err => {
        //   console.log(err);
      }
    );

    this.prefill.getEnqStardards().subscribe(
      data => { this.enqStd = data; },
      err => {
      }
    );

    this.prefill.getSchoolDetails().subscribe(
      data => {
        this.school = data;
        this.instituteList = this.school;

        this.instituteList.forEach(el => {
          el.edit = false;
        });
      },
      err => {
        //  console.log(err);
      }
    );

    this.prefill.getLeadSource().subscribe(
      data => {
        this.sourceLead = data;
        this.sourceList = this.sourceLead;
        this.sourceList.forEach(el => {
          el.edit = false;
        });
      },
      err => {
        //   console.log(err);
      }
    );

    this.fetchReferInfo();

    this.prefill.getOccupation().subscribe(
      data => { this.occupation = data; },
      err => {
        //   console.log(err);
      }
    );

    this.prefill.fetchLastDetail().subscribe(
      data => {
        this.lastDetail = data;
      },
      err => {
        // console.log(err);
      }
    );

    this.getCityAreaList()

    this.fetchCustomComponentData();

    if (!this.isProfessional) {
      this.fetchMasterCourseDetails();
    }
  }

  getCityAreaList() {
    this.prefill.getCityList().subscribe(
      data => {
        this.cityListDataSource = data;
      },
      err => {

      }
    )
  }

  fetchMasterCourseDetails() {
    this.prefill.getMasterCourseData().subscribe(
      (res: any) => {
        this.masterCourseData = res;
      });
  }


  fetchCustomComponentData() {
    this.customComponents = [];
    this.prefill.fetchCustomComponentEmpty()
      .subscribe(
        data => {
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
                  value: el.enq_custom_value == "" ? false : true,
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
        });
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


  /* Custom Compoenent array creater */
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


  /* On Phone Number input by user update model and fetch lead records if any */
  updatePhoneFetchRecords() {
    this.prefill.fetchLeadDetails(this.newEnqData.phone).subscribe(
      data => { this.updateForm(data) },
      err => { }
    );
  }


  /* Function to fetch lead details on basis of the phone number provided by user */
  getLeadDetails() {
    //console.log(this.newEnqData.phone);
    if (this.validatePhone(this.newEnqData.phone)) {
      this.prefill.fetchLeadDetails(this.newEnqData.phone).subscribe(
        data => { this.updateForm(data) },
        err => {
          this.showErrorMessage('error', "Unable to fetch lead", err.error.message);
        }
      );
    }
  }


  /* Function to validate the number provided by user  and return data back to getLeadDetails*/
  validatePhone(num) {
    //console.log(num);
    if (num != null) {
      return this.newEnqData.phone.length === this.maxlength;
    }
  }


  /* Update the form fields onn basis of the data retreived from getLeadDetails*/
  updateForm(data) {
    this.newEnqData.curr_address = data.address;
    this.newEnqData.assigned_to = data.assigned_to;
    this.newEnqData.city = data.city;
    this.newEnqData.email = data.email;
    this.newEnqData.gender = data.gender;
    this.newEnqData.name = data.name;
    this.newEnqData.referred_by = data.referred_by;
    this.newEnqData.source_id = data.source_id;
  }


  /* Function to fetch subject when user selects a standard from dropdown */
  fetchSubject(value) {
    if (value != null && value != '' && value != '-1') {
      this.newEnqData.subject_id = '-1';
      this.enqSub = [];
      this.newEnqData.standard_id = value;
      this.prefill.getEnqSubjects(this.newEnqData.standard_id).subscribe(
        data => {
          this.enqSub = data;
        }
      )
    }
    else {
      this.newEnqData.subject_id = '-1';
      this.newEnqData.subjectIdArray = null;
      this.enqSub = [];
    }

  }


  /* Function to clear the form data */
  clearFormData() {
    this.newEnqData = {
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
      city: "",
      occupation_id: "-1",
      school_id: "-1",
      qualification: "",
      grade: "",
      master_course_name: "",
      enquiry_date: moment().format('YYYY-MM-DD'),
      standard_id: "-1",
      subject_id: "-1",
      subjectIdArray: null,
      referred_by: "-1",
      source_id: "-1",
      fee_committed: "",
      discount_offered: "",
      priority: "cold_call",
      enquiry: "",
      follow_type: "call",
      followUpDate: moment().format('YYYY-MM-DD'),
      religion: '',
      link: "",
      slot_id: null,
      closedReason: "",
      demo_by_id: "",
      status: "0",
      assigned_to: sessionStorage.getItem('userid'),
      followUpTime: "",
      lead_id: -1,
      enqCustomLi: [],
      walkin_followUpDate: '',
      walkin_followUpTime: '',
      closing_reason_id: '',
      is_follow_up_time_notification: false,
      country_id: this.country_id,
      state_id: "",
      city_id: "",
      area_id: ""
    };
    this.course_standard_id = '-1'
    this.selectedSubjectIds = null;
    this.course_mastercourse_id = '-1';
    this.selectedCourseIds = null;
    this.enqSub = [];
    this.followUpTime = "";
    this.hour = '';
    this.minute = '';
    this.meridian = '';
    this.customComponents.forEach(el => {
      el.value = '';
    });
    this.isEnquirySubmit = true;
    this.fetchCustomComponentData();
   // this.fetchDataForCountryDetails();
  }


  updateCustomComponent(v, comp) {
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


  getCustomComponents(): any[] {
    let tempArr: any[] = [];
    this.customComponents.forEach(e => {
      if (e.type == 5) {
        if (e.hasOwnProperty('value')) {
          let dd = moment(e.value).format("YYYY-MM-DD");
          if (dd != '' && dd != "Invalid date" && dd != null) {
            let obj: any = {};
            obj.component_id = e.id;
            obj.enq_custom_id = 0;
            obj.enq_custom_value = moment(e.value).format("YYYY-MM-DD");
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
              obj.enq_custom_id = 0;
              obj.enq_custom_value = e.value;
              tempArr.push(obj);
            }
          }
          else if (typeof e.value == 'boolean') {
            if (e.value) {
              let obj: any = {};
              obj.component_id = e.id;
              obj.enq_custom_id = 0;
              obj.enq_custom_value = "Y";
              tempArr.push(obj);
            }
            else {
              let obj: any = {};
              obj.component_id = e.id;
              obj.enq_custom_id = 0;
              obj.enq_custom_value = "N";
              tempArr.push(obj);
            }
          }
        }
      }
    });
    return tempArr;
  }


  submitRegisterForm(form: NgForm) {
    this.isRegisterStudent = true;
    this.newEnqData.follow_type = "Walkin";
    this.newEnqData.walkin_followUpDate = moment(new Date()).format('YYYY-MM-DD');
    this.newEnqData.walkin_followUpTime = this.getFollowupTime();
    this.submitForm(form);
  }


  /* Function to submit validated form data */
  submitForm(form: NgForm) {
    console.log("Form", form);

    //Validates if the custom component required fields are selected or not

    let customComponentValidator: boolean = this.customComponents.every(el => { return this.getCustomValid(el); });

    /* Validate the predefine required fields of the form */
    this.isFormValid = this.ValidateFormDataBeforeSubmit();

    // Validate If Area And City Settings is enable
    let validate = this.validateAreaAndCityFields();
    if (validate == false) {
      return;
    }

    /* Upload Data if the formData is valid */
    if (this.isFormValid && customComponentValidator) {
      if (this.validateTime()) {
        this.newEnqData.enqCustomLi = this.getCustomComponents();

        /* Check if user has entered any followup date time */
        if (this.hour != '') {
          this.newEnqData.followUpTime = this.hour + ":" + this.minute + " " + this.meridian;
        }

        /* is Main Branch No,sub Branch Selected */
        if (this.isMainBranch == "N" && this.subBranchSelected == false) {
          this.newEnqData.source_instituteId = '-1';
        }

        /* is Main Branch Yes,sub Branch Selected */
        else if (this.isMainBranch == "Y" && this.subBranchSelected == false) {
          this.newEnqData.source_instituteId = this.newEnqData.source_instituteId;
        }

        /* convert dob to standard format */
        this.newEnqData.dob = this.fetchDate(this.newEnqData.dob);
        this.newEnqData.enquiry_date = this.fetchDate(this.newEnqData.enquiry_date);
        this.newEnqData.followUpDate = this.fetchDate(this.newEnqData.followUpDate);

        if (this.isRegisterStudent == false) {
          if (this.newEnqData.walkin_followUpDate == "" || this.newEnqData.walkin_followUpDate == "Invalid date") {
            this.newEnqData.walkin_followUpDate = ""
          } else {
            this.newEnqData.walkin_followUpDate = moment(this.newEnqData.walkin_followUpDate).format('YYYY-MM-DD');
          }

          if (this.walkinTime.hour == "" || this.walkinTime.minute == "") {
            this.newEnqData.walkin_followUpTime = "";
          } else {
            if (this.walkinTime.hour != "") {
              let time = this.walkinTime.hour.split(' ');
              this.newEnqData.walkin_followUpTime = time[0] + ':' + this.walkinTime.minute + " " + time[1];
            }
          }
        }

        if (this.newEnqData.follow_type == "Walkin") {
          if (this.newEnqData.walkin_followUpDate == "") {
            this.showErrorMessage('error', '', 'Please enter walkin date for follow up type walkin');
            return;
          }

          if (this.newEnqData.walkin_followUpTime == "") {
            this.showErrorMessage('error', '', 'Please enter walkin time for follow up type walkin');
            return;
          }
        }
        if (this.selectedSubjectIds == '-1') {
          this.selectedSubjectIds = null;
        }
        if (this.selectedCourseIds == '-1') {
          this.selectedCourseIds = null;
        }
        if (this.newEnqData.subjectIdArray == '-1') {
          this.selectedCourseIds = null;
        }
        if (this.newEnqData.is_follow_up_time_notification == true) {
          this.newEnqData.is_follow_up_time_notification = 1;
        }
        else {
          this.newEnqData.is_follow_up_time_notification = 0;
        }

        if (CommonUtils.isOptionalValidEmailId(this.newEnqData.email)) {
          this.showErrorMessage('error', '', "Please enter valid email id");
          return;
        }
        if (CommonUtils.isOptionalValidEmailId(this.newEnqData.email2)) {
          this.showErrorMessage('error', '', "Please enter valid alternate email ID");
          return;
        }
        if (CommonUtils.isOptionalValidEmailId(this.newEnqData.parent_email)) {
          this.showErrorMessage('error', '', "Please enter valid parent email ID");
          return;
        }
        if (CommonUtils.isOptionalValidEmailId(this.newEnqData.guardian_email)) {
          this.showErrorMessage('error', '', "Please enter valid guardian email ID");
          return;
        }
  
        if (!this.isProfessional && (this.isEnquirySubmit)) {
          this.isEnquirySubmit = false;
          let obj: any = {
            area: this.newEnqData.area,
            assigned_to: this.newEnqData.assigned_to,
            city: this.newEnqData.city,
            country_id: this.newEnqData.country_id,
            state_id: this.newEnqData.state_id,
            city_id: this.newEnqData.city_id,
            area_id: this.newEnqData.area_id,
            closedReason: this.newEnqData.closedReason,
            courseIdArray: this.selectedCourseIds,
            curr_address: this.newEnqData.curr_address,
            demo_by_id: this.newEnqData.demo_by_id,
            discount_offered: this.newEnqData.discount_offered,
            dob: this.newEnqData.dob,
            email: this.newEnqData.email.trim(),
            email2: this.newEnqData.email2,
            enqCustomLi: this.newEnqData.enqCustomLi,
            enquiry: this.newEnqData.enquiry,
            enquiry_date: this.newEnqData.enquiry_date,
            fee_committed: this.newEnqData.fee_committed,
            followUpDate: this.newEnqData.followUpDate,
            followUpTime: this.newEnqData.followUpTime,
            follow_type: this.newEnqData.follow_type,
            gender: this.newEnqData.gender,
            grade: this.newEnqData.grade,
            lead_id: this.newEnqData.lead_id,
            link: this.newEnqData.link,
            name: this.newEnqData.name,
            occupation_id: this.newEnqData.occupation_id,
            parent_email: this.newEnqData.parent_email,
            parent_name: this.newEnqData.parent_name,
            parent_phone: this.newEnqData.parent_phone,
            phone: this.newEnqData.phone,
            phone2: this.newEnqData.phone2,
            priority: this.newEnqData.priority,
            qualification: this.newEnqData.qualification,
            referred_by: this.newEnqData.referred_by,
            religion: this.newEnqData.religion,
            school_id: this.newEnqData.school_id,
            standard_id: this.newEnqData.standard_id,
            slot_id: this.newEnqData.slot_id,
            source_id: this.newEnqData.source_id,
            source_instituteId: this.newEnqData.source_instituteId,
            status: this.newEnqData.status,
            subjectIdArray: this.selectedSubjectIds,
            walkin_followUpDate: this.newEnqData.walkin_followUpDate,
            walkin_followUpTime: this.newEnqData.walkin_followUpTime,
            is_follow_up_time_notification: this.newEnqData.is_follow_up_time_notification,
            birth_place: this.newEnqData.birth_place,
            blood_group: this.newEnqData.blood_group,
            category: this.newEnqData.category,
            nationality: this.newEnqData.nationality,
            student_adhar_no: this.newEnqData.student_adhar_no,
            parent_adhar_no: this.newEnqData.parent_adhar_no,
            parent_profession: this.newEnqData.parent_profession,
            mother_tounge: this.newEnqData.mother_tounge,
            extra_curricular_activities: this.newEnqData.extra_curricular_activities,
            educational_group: this.newEnqData.educational_group,
            pin_code: this.newEnqData.pin_code,
            inst_acad_year_id: this.newEnqData.inst_acad_year_id,
            guardian_name: this.newEnqData.guardian_name,
            guardian_phone: this.newEnqData.guardian_phone,
            guardian_email: this.newEnqData.guardian_email,
            address: this.newEnqData.address

          }
          this.newEnqData.parent_email = (this.newEnqData.parent_email) ? this.newEnqData.parent_email.trim() : '';
          this.newEnqData.guardian_email = (this.newEnqData.guardian_email) ? this.newEnqData.guardian_email.trim() : '';
          this.newEnqData.email2 = (this.newEnqData.email2) ? this.newEnqData.email2.trim() : '';
          if (this.convertEnquiry) {
            obj.user_id = this.newEnqData.user_id
          }
          console.log(obj);
          this.auth.showLoader();
          this.poster.postNewEnquiry(obj).subscribe(
            (data: any) => {
              this.auth.hideLoader();
              this.enquiryConfirm = data;
              let instituteEnqId = data.generated_id;
              this.prefill.fetchLastDetail().subscribe(data => {
                this.lastDetail = data;
                if (this.isRegisterStudent) {
                  this.convertTOStudent(instituteEnqId);
                }
                else {
                  if (this.addNextCheck) {
                    //form.reset();
                    this.showErrorMessage('success', "", "Enquiry added successfully");
                    this.clearFormData();
                  }
                  else {
                    this.openConfirmationPopup();
                    this.clearFormData();
                  }

                }
              },
                err => {

                });
            },
            err => {
              this.auth.hideLoader();
              this.isEnquirySubmit = true;
              this.showErrorMessage('error', '', err.error.message);
            }
          );
        }
        else {
          this.auth.showLoader();
          if (this.isEnquirySubmit) {
            this.isEnquirySubmit = false;
            this.poster.postNewEnquiry(this.newEnqData).subscribe(
              (data: any) => {
                this.auth.hideLoader();
                this.enquiryConfirm = data;
                let instituteEnqId = data.generated_id;
                this.prefill.fetchLastDetail().subscribe(data => {
                  this.lastDetail = data;
                  if (this.isRegisterStudent) {
                    this.convertTOStudent(instituteEnqId);
                  }
                  else {
                    if (this.addNextCheck) {
                      //form.reset();
                      this.showErrorMessage('success', "", "Enquiry added successfully");
                      this.clearFormData();
                    }
                    else {
                      this.openConfirmationPopup();
                      this.clearFormData();
                    }

                  }
                },
                  err => {

                  });
              },
              err => {
                this.auth.hideLoader();
                this.isEnquirySubmit = true;
                this.showErrorMessage('error', '', err.error.message);
              }
            );
          }
        }
      }
      else {
        this.isEnquirySubmit = true;
        this.showErrorMessage('error', '', 'Please select a valid time for follow up');
      }
    }
    else {
      this.isEnquirySubmit = true;
      this.submitError = true;
    }
  }


  convertTOStudent(instituteEnqId) {
    let obj: any = {
      name: this.newEnqData.name,
      phone: this.newEnqData.phone,
      email: this.newEnqData.email,
      gender: this.newEnqData.gender,
      dob: this.fetchDate(this.newEnqData.dob),
      parent_email: this.newEnqData.parent_email,
      school_name: this.newEnqData.school_id,
      standard_id: this.newEnqData.standard_id,
      parent_name: this.newEnqData.parent_name,
      parent_phone: this.newEnqData.parent_phone,
      enquiry_id: instituteEnqId,
      institute_enquiry_id: instituteEnqId,
      school_id: this.newEnqData.school_id,
      curr_address: this.newEnqData.curr_address,
      country_id: this.newEnqData.country_id,
      assigned_to: this.newEnqData.assigned_to,
      state_id: this.newEnqData.state_id,
      area_id: this.newEnqData.area_id,
      city_id: this.newEnqData.city_id,
      comments: this.newEnqData.enquiry,
    }
        obj.birth_place = this.newEnqData.birth_place,
        obj.blood_group = this.newEnqData.blood_group,
        obj.category = this.newEnqData.category,
        obj.nationality = this.newEnqData.nationality,
        obj.student_adhar_no = this.newEnqData.student_adhar_no,
        obj.parent_adhar_no = this.newEnqData.parent_adhar_no,
        obj.parent_profession = this.newEnqData.parent_profession,
        obj.mother_tounge = this.newEnqData.mother_tounge,
        obj.extra_curricular_activities = this.newEnqData.extra_curricular_activities,
        obj.educational_group = this.newEnqData.educational_group,
        obj.pin_code = this.newEnqData.pin_code,
        obj.student_perm_addr = this.newEnqData.address,
        obj.guardian_name = this.newEnqData.guardian_name,
        obj.guardian_email = this.newEnqData.guardian_email,
        obj.guardian_phone = this.newEnqData.guardian_phone,
        obj.religion = this.newEnqData.religion
    if (!this.isProfessional) {
      obj.standard_id = this.course_standard_id;
    } else {
      obj.standard_id = this.course_mastercourse_id;
    }
    sessionStorage.setItem('studentPrefill', JSON.stringify(obj));
    this.router.navigate(['/view/students/add']);
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


  validateAreaAndCityFields() {
    if (this.isCityMandatory == 1 && this.isStateMandatory == 1) {
      if (this.newEnqData.state_id == "") {
        return this.showErrorMessage('error', '', 'Please enter State details');
      }
      else {
        if (this.newEnqData.city_id == '') {
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

  notifyMeCheckBoxChangesDetect() {
    if (this.newEnqData.followUpDate != "" && this.newEnqData.followUpDate != null) {
      if (this.hour != "" && this.meridian != "" && this.minute != "") {
        // Do nothing
      } else {
        this.newEnqData.is_follow_up_time_notification = false;
      }
    } else {
      this.newEnqData.is_follow_up_time_notification = false;
    }
  }

  getCustomValid(element): boolean {

    if (element.is_required == "Y" && element.value != "") {
      if (element.type == 5) {
        if (element.value != "" && element.value != null && element.value != "Invalid date") {
          return true;
        }
        else {
          return this.showErrorMessage('error', '', 'Please add required field(s) in academics details section');
        }
      }
      else {
        return true;
      }
    }
    else if (element.is_required == "Y" && element.value == "") {
      return this.showErrorMessage('error', '', 'Please add required field(s) in academics details section');
    }
    else if (element.is_required == "N") {
      return true;
    }
  }

  /* Validate the Entire FormData Once Before Uploading= */
  ValidateFormDataBeforeSubmit(): boolean {
    let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
    let phoneFlag = this.commonServiceFactory.phonenumberCheck(this.newEnqData.phone, this.maxlength, this.country_id)
    if (phoneFlag == false || phoneFlag == 'noNumber') {
      if (phoneFlag == 'noNumber') {
        return this.showErrorMessage('error', 'Please enter valid contact no.', '');
      }
      else {
        return this.showErrorMessage('error', msg, '');
      }
    }
    // else if (this.commonServiceFactory.checkValueType(moment(this.newEnqData.enquiry_date).format("YYYY-MM-DD"))) {
    //   return this.showErrorMessage('error', '', 'Please select enquiry date ');
    // }
    else if (this.commonServiceFactory.sourceValueCheck(this.newEnqData.source_id)) {
      return this.showErrorMessage('error', '', 'Please select enquiry source');
    }
    else if (this.newEnqData.name == '' || this.newEnqData.name == null) {
      return this.showErrorMessage('error', '', 'Please enter name');
    }
    else if (this.newEnqData.follow_type == '' || this.newEnqData.follow_type == null) {
      return this.showErrorMessage('error', '', 'Please select follow up type');
    }
    else {
      if (this.validateEnquiryDate()) {//newEnqData.parent_phone
        if (this.newEnqData.parent_phone != '' && this.newEnqData.parent_phone != null) {
          if (this.commonServiceFactory.phonenumberCheck(this.newEnqData.parent_phone, this.maxlength, this.country_id) == false && this.newEnqData.parent_phone != "") {
            return this.showErrorMessage('error', '', msg);
          }
        }
        if (this.newEnqData.phone2 != '' && this.newEnqData.phone2 != null) {
          if (this.commonServiceFactory.phonenumberCheck(this.newEnqData.phone2, this.maxlength, this.country_id) == false && this.newEnqData.phone2 != "") {
            return this.showErrorMessage('error', '', msg);
          }
        }
        if (this.hour == '' && Number(this.minute) > 0) {
          return this.showErrorMessage('error', '', 'Please select time');
        }
        return true;
      }
      else {
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
    let b = moment(this.newEnqData.enquiry_date);
    let d = a.diff(b);
    if (d < 0) {
      return false;
    }
    else {
      return true;
    }
  }


  /* fetch the data of last updated enquiry */
  updateLastUpdatedDetails() {
    this.prefill.fetchLastDetail().subscribe(data => {
      this.lastDetail = data;
    },
      err => {
        //  console.log(err);
      }
    )
  }


  /* Function to open confirmation popup on succesfull form submission  */
  openConfirmationPopup() {
    //  console.log("confirmation popup opened");
    this.confimationPop = true;
  }


  /* Function to close the confirmation popup */
  closePopUp() {
    // console.log("confirmation popup closed");
    this.confimationPop = false;
  }


  /* function to open update popup */
  openUpdatePopup() {
    this.closePopUp();
    this.updatePop = true;
    // console.log("edit popup opened");
  }


  /* Function to close update popup */
  closeUpdatePopup() {
    this.updatePop = false;
  }


  /* function to open popup to add source */
  showAddSourcePops() {
    //console.log('clicked');
    this.isSourcePop = true;
  }


  /* function to hide popup to add source */
  hideAddSourcePops() {
    this.isSourcePop = false;
  }


  /* function to show popup for adding reference */
  showAddReferPops() {
    this.isReferPop = true;
  }


  /* function to hide popup for adding reference */
  hideAddReferPops() {
    this.isReferPop = false;
  }


  /* Reload the Enquiry Form and clear data */
  reloadEnquiryForm() {
    this.clearFormData();
    this.closePopUp();
  }


  customComponentUpdated(val, data) {
    this.componentListObject[data.component_id].enq_custom_value = val;
    // console.log(this.componentListObject);
  }


  navigateToEdit() {
    let val: any;
    this.prefill.fetchLastDetail().subscribe(el => {
      this.router.navigate(['/view/leads/enquiry/edit/' + el.institute_enquiry_id]);
    }
    )
  }
  /* --------------------------------------------------------------------------------------------------------- */
  /* ---------------------------------------------- Institute Editor Logic ------------------------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /* function to open popup to add institute */
  openAddInstitute() {
    this.isInstitutePop = true;
  }


  /* function to hide popup to add institute */
  closeInstituteAdder() {
    this.isInstitutePop = false;
    this.isNewInstitute = false;
    this.createInstitute.instituteName = '';
    this.fetchInstituteInfo();
  }


  /* function to set-unset isActive status for add institute */
  toggleInstituteActive(event) {
    if (event) {
      this.createInstitute.isActive = "Y";
    }
    else {
      this.createInstitute.isActive = "N";
    }
  }

  /* function to add institute data to server */
  addInstituteData() {
    this.prefill.createNewInstitute(this.createInstitute).subscribe(
      el => {
        if (el.message === "OK") {
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
              this.showErrorMessage('error', '', err.error.message);
            }
          );
          // console.log("institute Added");
        }
        else {
          // console.log("Institute Name already exist!");
        }
      },
      err => {
        //console.log(err);
        this.showErrorMessage('error', '', err.error.message);
      }
    );
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


  /* close add new institute */
  closeAddInstitute() {
    this.isNewInstitute = false;
    document.getElementById('add-institute-icon').innerHTML = '+';
    this.createInstitute.instituteName = '';
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
      }
    });
  }


  cancelEditInstitute(id) {
    this.fetchInstituteInfo();
  }


  updateInstitute(id) {
    this.instituteList.forEach(el => {
      if (el.school_id == id) {
        this.poster.updateInstituteDetails(id, el).subscribe(
          res => {
            this.showErrorMessage('success', '', 'Institute name updated');
            this.fetchInstituteInfo();
          },
          err => {
            this.showErrorMessage('error', 'We couldn\'t process your request', err.error.message);
            this.fetchInstituteInfo();
          }
        )
      }
    });
  }


  deleteInstitute(id) {
    this.poster.deleteInstitute(id).subscribe(
      res => {
        this.showErrorMessage('success', '', " Institute record deleted successfully");
        this.fetchInstituteInfo();
      },
      err => {
        this.showErrorMessage('error', 'Your request has been denied', err.error.message);
        this.fetchInstituteInfo();
      }
    )
  }
  /* --------------------------------------------------------------------------------------------------------- */
  /* ---------------------------------------------- Reference Editor Logic ------------------------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /* function to open popup to add Reference */
  openAddRefer() {
    this.isReferPop = true;
  }


  /* function to hide popup to add Reference */
  closeReferAdder() {
    this.isReferPop = false;
    this.isNewRefer = false;
    this.createReferer.name = '';
  }


  /* function to add Reference data to server */
  addReferData() {
    if (this.createReferer.name.trim() != '') {
      if ((this.referList.filter(x => x.name == this.createReferer.name.trim())).length == 0) {
        this.prefill.createReferer(this.createReferer).subscribe(
          el => {
            this.closeAddRefer();
            this.fetchReferInfo();
          },
          err => {
            this.showErrorMessage('error', '', err.error.message);
          }
        );
      } else {
        this.showErrorMessage('error', '', 'Referrer name already exist!');
      }
    } else {
      this.showErrorMessage('info', '', 'Please enter Referrer name');
    }
  }


  /* toggle visibility of new Reference form */
  toggleReferAdd() {
    let icon = document.getElementById('add-refer-icon').innerHTML;
    if (icon == '+') {
      this.isNewRefer = true;
      document.getElementById('add-refer-icon').innerHTML = '-';
    }
    else if (icon == '-') {
      this.isNewRefer = false;
      this.createReferer.name = '';
      document.getElementById('add-refer-icon').innerHTML = '+';
    }
  }


  /* close add new Reference */
  closeAddRefer() {
    this.isNewRefer = false;
    document.getElementById('add-refer-icon').innerHTML = '+';
    this.createReferer.name = '';
  }


  fetchReferInfo() {
    this.prefill.getLeadReffered().subscribe(
      data => {
        this.referList = data;
        this.referList.forEach(el => {
          el.edit = false;
        });
      },
      err => {
        this.referList = [];
      }
    )
  }


  editRefer(id) {
    this.referList.forEach(el => {
      if (el.id == id) {
        el.edit = true;
        el.new_referrer_name = el.name;
      }
    });
  }


  cancelEditRefer(id) {
    let temp = this.referList.filter(el => el.id == id);
    if (temp) {
      temp[0].edit = false;
      temp[0].new_referrer_name = temp[0].name;
    }
  }


  updateRefer(id) {
    this.referList.forEach(el => {
      if (el.id == id) {
        let data = {
          id: id,
          name: el.new_referrer_name,
          inst_id: sessionStorage.getItem('institute_id')
        };
        this.auth.showLoader();
        this.poster.updateReferDetails(data).subscribe(
          res => {
            this.auth.hideLoader();
            this.showErrorMessage('success', '', 'Reference updated Successfully');
            this.fetchReferInfo();
          },
          err => {
            this.auth.hideLoader();
            this.showErrorMessage('error', '', err.error.message);
          }
        )
      }
    });
  }


  deleteRefer(id, name) {
    let data = {
      id: id,
      name: name,
      inst_id: sessionStorage.getItem('institute_id')
    };
    this.auth.showLoader();
    this.poster.deleteRefer(data).subscribe(
      res => {
        this.auth.hideLoader();
        this.showErrorMessage('success', '', 'Reference deleted Successfully');
        this.referList.filter(x => (x.id == id)).splice(0, 1);
        this.fetchReferInfo();
      },
      err => {
        this.auth.hideLoader();
        let msg;
        if (err.status == 500) {
          msg = JSON.parse(err._body);
          this.showErrorMessage('error', '', msg.message);
        } else {
          this.showErrorMessage('error', '', err.error.message);
        }
      }
    );
  }
  /* --------------------------------------------------------------------------------------------------------- */
  /* ---------------------------------------------- Source Editor Logic ------------------------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /* function to open popup to add Source */
  openAddSource() {
    this.isSourcePop = true;
  }


  /* function to hide popup to add Source */
  closeSourceAdder() {
    this.isSourcePop = false;
    this.isNewSource = false;
    this.createSource.name = '';
    this.fetchSourceInfo();
  }


  /* function to add Source data to server */
  addSourceData() {
    if (this.createSource.name.trim() != '') {
      if ((this.sourceList.filter(x => x.name == this.createSource.name.trim())).length == 0) {
        this.auth.showLoader();
        this.prefill.createSource(this.createSource).subscribe(
          el => {
            this.auth.hideLoader();
            this.fetchSourceInfo();
            this.closeAddSource();
          },
          err => {
            this.auth.hideLoader();
            this.showErrorMessage('error', '', err.error.message);
          }
        );
      } else {
        this.showErrorMessage('error', '', 'Source name already exist!');
      }
    } else {
      this.showErrorMessage('info', '', 'Please enter source name');
    }
  }


  /* toggle visibility of new Source form */
  toggleSourceAdd() {

    let icon = document.getElementById('add-source-icon').innerHTML;
    if (icon == '+') {
      this.isNewSource = true;
      document.getElementById('add-source-icon').innerHTML = '-';
    }
    else if (icon == '-') {
      this.isNewSource = false;
      this.createSource.name = '';
      document.getElementById('add-source-icon').innerHTML = '+';
    }
  }


  /* close add new Source */
  closeAddSource() {
    this.isNewSource = false;
    document.getElementById('add-source-icon').innerHTML = '+';
    this.createSource.name = '';
  }


  /* Source fetch via API*/
  fetchSourceInfo() {
    this.prefill.getLeadSource().subscribe(
      data => {
        this.sourceLead = data;
        this.sourceList = this.sourceLead;
        this.sourceList.forEach(el => {
          el.edit = false;
        });
      },
      err => {
        this.sourceList = [];
      }
    )
  }


  /* Source edit open*/
  editSource(id) {
    this.sourceList.forEach(el => {
      if (el.id == id) {
        el.edit = true;
        el.new_source_name = el.name;
      }
    });
  }


  /* Source edit cancel*/
  cancelEditSource(id) {
    // this.fetchSourceInfo();
    let temp = this.sourceList.filter(el => el.id == id);
    if (temp) {
      temp[0].edit = false;
      temp[0].new_source_name = temp[0].name;
    }
  }


  /* Source update*/
  updateSource(id) {
    this.sourceList.forEach(el => {
      if (el.id == id) {
        let data = {
          id: id,
          name: el.new_source_name,
          inst_id: sessionStorage.getItem('institute_id')
        }
        this.auth.showLoader();
        this.poster.updateSourceDetails(data).subscribe(
          res => {
            this.auth.hideLoader();
            this.showErrorMessage('success', '', 'Source updated successfully');
            this.fetchSourceInfo();
          },
          err => {
            this.auth.hideLoader();
            this.showErrorMessage('error', '', err.error.message);

          }
        )
      }
    });
  }

  /* =================================================== have not used ========================================================================= */
  timeChanges(ev, id) {
    if (ev.split(' ')[0] != '') {
      this.hour = ev.split(' ')[0];
      this.meridian = ev.split(' ')[1];
      if (this.minute == "") {
        this.minute = this.minArr[1];
      }
    }
    else {
      this.hour = '';
      this.meridian = '';
      this.minute = this.minArr[0];
    }
    this.notifyMeCheckBoxChangesDetect();
  }


  /* Source delete*/
  deleteSource(id) {
    this.sourceList.forEach(el => {
      if (el.id == id) {
        let data = {
          id: id,
          name: el.name,
          inst_id: sessionStorage.getItem('institute_id')
        }
        this.auth.showLoader();
        this.poster.deleteSource(data).subscribe(
          res => {
            this.auth.hideLoader();
            this.showErrorMessage('success', '', 'Source deleted successfully');
            this.fetchSourceInfo();
          },
          err => {
            this.auth.hideLoader();
            this.showErrorMessage('error', '', err.error.message);
          }
        )
      }
    });
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


  getLastAddName(): string {
    if (this.lastDetail != null) {
      return this.lastDetail.name;
    }
    else {
      return "";
    }
  }


  getLastEnqNum() {
    if (this.lastDetail != null) {
      return this.lastDetail.enquiry_no;
    }
    else {
      return "";
    }
  }


  getLastUpdateTime() {
    if (this.lastDetail != null) {
      return moment(this.lastDetail.enquiry_creation_datetime).fromNow();
    }
    else {
      return "";
    }
  }


  clearAddEnquiryDate() {
    this.newEnqData.enquiry_date = "";
  }


  clearAddFollowUpDate() {
    this.newEnqData.followUpDate = "";
    this.hour = '';
    this.minute = '';
    this.meridian = '';
  }



  // MultiBranch
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
    this.auth.showLoader();
    this.newEnqData.source_instituteId = e;
    this.prefill.fetchAssignedToData(e).subscribe(
      res => {
        this.auth.hideLoader();
        this.enqAssignTo = res;
        this.newEnqData.assigned_to = "-1";
      },
      err => {
        this.auth.hideLoader();
      }
    );
  }



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

  cancelForm() {
    this.router.navigate(['/view/leads/enquiry']);
    sessionStorage.removeItem('enquiryPrefill');
  }


}
