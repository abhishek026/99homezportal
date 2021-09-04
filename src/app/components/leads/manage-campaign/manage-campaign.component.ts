import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MessageShowService } from '../../../services/message-show.service';
import { CampaignService } from '../services/campaign.service';
import { ExportToPdfService } from '../../../services/export-to-pdf.service';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { role } from '../../../model/role_features';
import { CommonServiceFactory } from '../../../services/common-service';
declare var $;

@Component({
  selector: 'app-manage-campaign',
  templateUrl: './manage-campaign.component.html',
  styleUrls: ['./manage-campaign.component.scss']
})
export class ManageCampaignComponent implements OnInit {

  // global variables
  jsonFlag = {
    isProfessional: false,
    institute_id: '',
    isRippleLoad: false,
    toggle: false
  };

  // Search filter variables
  filters = {
    stundetName: "",
    contactNumber: "",
    campaignName: "-1",
    referredBy: "-1",
    source: "-1",
    assignedTo: "-1"
  };

  leadSearchInput: any;
  campaignList: any;
  referredByList: any;
  sourceList: any;
  assignedToList: any;

  leadsList: any;
  tempLeadlist: any;
  checkedIds: any[] = [];
  promoSMSList: any;
  selectedSMSList: any[] = [];

  // leads variables
  //Add lead
  addLead = {
    phone: "",
    name: "",
    gender: "M",
    emailId: "",
    address: "",
    city: "",
    referredBy: "-1",
    source: "-1",
    country_id: ""
  };
  // Edit lead
  editLead = {
    phone: "",
    name: "",
    gender: "M",
    emailId: "",
    address: "",
    city: "",
    referredBy: "-1",
    source: "-1",
    list_id: "",
    base_id: "",
    country_id: ""
  };

  checkAll: boolean = false;
  downloadEnquiryReportAccess = false;

  // FOR PAGINATION
  pageIndex: number = 1;
  displayBatchSize: number = 50;
  totalCount: number = 0;
  sizeArr: any[] = [20, 50, 100, 150, 200, 500];
  startindex: number = 0;
  role_feature = role.features;
  countryDetails: any = [];
  maxlength: any = 10;
  country_id: any = null;

  constructor(
    private campaignService: CampaignService,
    private msgService: MessageShowService,
    private auth: AuthenticatorService,
    private _pdfService: ExportToPdfService,
    private commonServiceFactory: CommonServiceFactory
  ) { }



  ngOnInit() {
    this.fetchPreFillData();
    this.checkRoleAccess();
    this.fetchDataForCountryDetails();
  }

  checkRoleAccess() {
    if (sessionStorage.getItem('downloadEnquiryReportAccess') == 'true') {
      this.downloadEnquiryReportAccess = true;
    }
  }

    // created by: Nalini Walunj
  // Below three functions are written to fetch country details from the session stored at the time of login of institute
  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      this.addLead.country_id = this.countryDetails[0].id;
      this.maxlength = this.countryDetails[0].country_phone_number_length;
      this.country_id = this.countryDetails[0].id;
    }
  }

  onChangeObj(event) {
    console.log(event);
    this.countryDetails.forEach(element => {
      if (element.id == event) {
        this.editLead.country_id = element.id;
        this.maxlength = element.country_phone_number_length;
        this.country_id = element.id;
      }
    });
  }

  fetchPreFillData() {
    this.auth.showLoader();
    // get all source list
    this.campaignService.getAllSources().subscribe(
      res => {
        this.sourceList = res;
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
        this.auth.hideLoader();
      }
    );
    // get all assigned list
    this.campaignService.getAssignedList().subscribe(
      res => {
        this.assignedToList = res;
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
    // get all referred by list
    this.campaignService.getReferredByList().subscribe(
      res => {
        this.referredByList = res;
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
    // fetch all leads(students)
    this.campaignService.getCampaignList().subscribe(
      res => {
        this.campaignList = res;
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
    this.searchCampaign(this.startindex);
  }

  searchCampaign(index) {
    if (index == 0) {
      this.pageIndex = 1;
    }
    this.checkedIds = [];
    this.auth.showLoader();
    let obj: any = {
      "assigned_to": this.filters.assignedTo,
      "name": this.filters.stundetName,
      "mobile": this.filters.contactNumber,
      "list_id": this.filters.campaignName,
      "source_id": this.filters.source,
      "referred_by": this.filters.referredBy,
      "start_index": index,
      "batch_size": 100
    }
    if(this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
      obj.is_admin_role_access = true;
    }
    this.campaignService.searchLeads(obj).subscribe(
      res => {
        let result: any;
        result = res;
        this.auth.hideLoader();
        this.leadsList = res;
        this.tempLeadlist = res;
        this.totalCount = 0;
        if (result.length > 0) {
          for (let i = 0; i < this.leadsList.length; i++) {
            if (this.leadsList[i].converted == 0) {
              this.leadsList[i].select = false;
            }
          }
          this.totalCount = this.leadsList[0].totalCount;
        }
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
  }

  searchDatabase() {   // quick search
    this.leadsList = this.tempLeadlist;
    if (this.leadSearchInput == undefined || this.leadSearchInput == null) {
      this.leadSearchInput = "";
    }
    else {
      let searchData = this.tempLeadlist.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.leadSearchInput.toLowerCase()))
      );
      this.leadsList = searchData;
    }
  }

  downloadPdf() {
    let arr = [];
    for (let i = 0; i < this.tempLeadlist.length; i++) {
      this.tempLeadlist[i].converted_status = "-";
      if (this.tempLeadlist[i].converted == 1) {
        this.tempLeadlist[i].converted_status = "Converted";
      }
      if (this.tempLeadlist[i].name.length == 0) {
        this.tempLeadlist[i].name = "-";
      }
      if (this.tempLeadlist[i].email.length == 0) {
        this.tempLeadlist[i].email = "-";
      }
      if (this.tempLeadlist[i].address.length == 0) {
        this.tempLeadlist[i].address = "-";
      }
      if (this.tempLeadlist[i].city.length == 0) {
        this.tempLeadlist[i].city = "-";
      }
      if (this.tempLeadlist[i].referred_name.length == 0) {
        this.tempLeadlist[i].referred_name = "-";
      }
      if (this.tempLeadlist[i].source_name.length == 0) {
        this.tempLeadlist[i].source_name = "-";
      }
    }
    this.tempLeadlist.map(
      (ele: any) => {
        let json = [
          ele.mobile,
          ele.name,
          ele.email,
          ele.address,
          ele.city,
          ele.gender,
          ele.referred_name,
          ele.source_name,
          ele.converted_status
        ]
        arr.push(json);
      })

    let rows = [];
    rows = [['Mobile', 'Name', 'Email', 'Address', 'City', 'Gender', 'Referred By', 'Source', 'Status']]
    let columns = arr;
    this._pdfService.exportToPdf(rows, columns, 'Leads List');
  }

  // checkbox checked/unchecked activiity
  rowCheckBoxClick(row) {
    let validate_check = false;
    for (let i = 0; i < this.checkedIds.length; i++) {
      if (this.checkedIds[i] == row.base_id) {
        this.checkedIds.splice(i, 1);
        this.checkAll = false;
        return validate_check = true;
      }
    }
    if (!validate_check) {
      this.checkedIds.push(row.base_id)
    }
  }

  // check all checkbox
  checkAllLead(event) {
    this.checkedIds = [];
    let event_flag = event.target.checked;
    for (let i = 0; i < this.leadsList.length; i++) {
      this.leadsList[i].select = event_flag;
      if (this.leadsList[i].converted == 0) {
        if (event_flag) {
          this.checkedIds.push(this.leadsList[i].base_id)
        }
      }
    }
  }

  // fetch promotional msg and show pop up
  showPromoSMS() {
    if (this.checkedIds.length == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!');
      $('#SMS').modal('hide');
    }
    else {
      let obj = {
        "status": 1,
        "sms_type": "Promotional"
      }
      this.auth.showLoader();
      $('#SMS').modal('show');
      this.campaignService.getPromoSMS(obj).subscribe(
        res => {
          this.promoSMSList = res;
          this.auth.hideLoader();
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          this.auth.hideLoader();
        }
      );
    }
  }

  selectMsg(msg) {
    let validate_check = false;
    for (let i = 0; i < this.selectedSMSList.length; i++) {
      if (this.selectedSMSList[i] == msg.message_id) {
        this.selectedSMSList.splice(i, 1);
        return validate_check = true;
      }
    }
    if (!validate_check) {
      this.selectedSMSList.push(msg.message_id)
    }
  }

  // Send checked msg
  sendSMS() {
    if (this.selectedSMSList.length == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No SMS is selected. Kindly select at least one!')
    }
    else {
      let obj = {
        "baseIds": this.checkedIds,
        "messageArray": this.selectedSMSList
      }
      this.auth.showLoader();
      this.campaignService.sendPromoSMS(obj).subscribe(
        res => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Message has been sent successfully.');
          this.auth.hideLoader();
          this.selectedSMSList = [];
          $('#SMS').modal('hide');
          this.checkedIds = [];
          this.searchCampaign(this.startindex);
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          this.auth.hideLoader();
          this.selectedSMSList = [];
          $('#SMS').modal('hide');
        }
      );
    }
  }

  // Convert lead to enq
  convertToEnq() {
    if (this.checkedIds.length == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!')
    }
    else {
      let obj = {
        "baseIds": this.checkedIds
      }
      this.auth.showLoader();
      this.campaignService.convertToEnq(obj).subscribe(
        res => {
          this.auth.hideLoader();
          this.checkedIds = [];
          this.searchCampaign(this.startindex);
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          this.auth.hideLoader();
        }
      );
    }
  }

  //  Delete multiple leads
  deleteMultipleLeads() {
    if (this.checkedIds.length == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!')
    }
    else {
      let obj = {
        "baseIds": this.checkedIds.toString()
      }
      this.auth.showLoader();
      this.campaignService.deleteMultiLeads(obj).subscribe(
        res => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead(s) deleted successfully!');
          this.auth.hideLoader();
          this.checkedIds = [];
          this.searchCampaign(this.startindex);
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          this.auth.hideLoader();
        }
      );
    }
  }
// changes done by Nalini - To validate phone numbers
  validateNum(phone) {
    let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
    let phoneFlag = this.commonServiceFactory.phonenumberCheck(phone, this.maxlength, this.country_id)
    if (phoneFlag == false || phoneFlag == 'noNumber') {
      if (phoneFlag == 'noNumber') {
        this.msgService.showErrorMessage('error', 'Please enter valid contact no.', '');
        return false;
      }
      else {
        this.msgService.showErrorMessage('error', msg, '');
        return false;
      }
    } else {
      return true;
    }
  }

  // CRUD operation on leads
  saveNewLead() {   // validation
    if (this.addLead.phone != null && this.addLead.phone != "") {
      if (this.validateNum(this.addLead.phone)) {
        if(this.addLead.name !=null && this.addLead.name != "") {
          if (this.addLead.source != "-1") {
            this.addNewLead()
          }
          else {
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please select source details');
          }
        } else {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter name');
        }
      }
    }
    else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Enter contact details');
    }
  }

  addNewLead() {
    let obj = {
      "name": this.addLead.name,
      "mobile": this.addLead.phone,
      "address": this.addLead.address,
      "email": this.addLead.emailId,
      "gender": this.addLead.gender,
      "city": this.addLead.city,
      "source_id": this.addLead.source,
      "referred_by": this.addLead.referredBy,
      "country_id": this.country_id
    };
    this.auth.showLoader();
    this.campaignService.createLead(obj).subscribe(
      res => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead added successfully');
        this.auth.hideLoader();
        $('#addLead').modal('hide');
        this.clearLeadForm();
        this.searchCampaign(this.startindex);
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
  }

  editLeadRow(row) {
    this.editLead.name = row.name;
    this.editLead.phone = (row.mobile.substring(row.mobile.lastIndexOf("-")+1, row.mobile.length));
    this.editLead.address = row.address;
    this.editLead.emailId = row.email;
    this.editLead.gender = row.gender;
    this.editLead.city = row.city;
    this.editLead.source = row.source_id;
    this.editLead.referredBy = row.referred_by;
    this.editLead.list_id = row.list_id;
    this.editLead.base_id = row.base_id;
    this.editLead.country_id = row.country_id;
  }

  updateLead() {
    if (this.editLead.phone != null && this.editLead.phone != "") {
      if (this.validateNum(this.editLead.phone)) {
        if(this.editLead.name !=null && this.editLead.name != "") {
        if (this.editLead.source != "-1") {
          this.modifyLead();
        }
        else {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please select source details');
        }
      } else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter name');
      }
      }
    }
    else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Enter contact details');
    }
  }

  modifyLead() {
    let obj = {
      "name": this.editLead.name,
      "mobile": this.editLead.phone,
      "address": this.editLead.address,
      "email": this.editLead.emailId,
      "gender": this.editLead.gender,
      "city": this.editLead.city,
      "source_id": this.editLead.source,
      "referred_by": this.editLead.referredBy,
      "is_active": "Y",
      "country_id": this.country_id
    };
    this.auth.showLoader();
    this.campaignService.updateLead(obj, this.editLead.list_id, this.editLead.base_id).subscribe(
      res => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead updated successfully');
        this.auth.hideLoader();
        $('#editLead').modal('hide');
        this.clearEditLeadForm();
        this.searchCampaign(this.startindex);
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        this.auth.hideLoader();
      }
    );
  }

  deleteLead(row) {
    console.log(row.list_id);
    if (confirm('Are you sure you want to delete lead?')) {
      this.auth.showLoader();
      this.campaignService.deleteLead(row.list_id, row.base_id).subscribe(
        res => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead deleted successfully');
          this.auth.hideLoader();
          this.searchCampaign(this.startindex);
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          this.auth.hideLoader();
        }
      );
    }
  }

  clearEditLeadForm() {
    this.editLead.name = "";
    this.editLead.phone = "";
    this.editLead.address = "";
    this.editLead.emailId = "";
    this.editLead.gender = "M";
    this.editLead.city = "";
    this.editLead.source = "-1";
    this.editLead.referredBy = "-1";
    this.editLead.list_id = "";
    this.editLead.base_id = "";
  }

  clearLeadForm() {
    this.addLead.name = "";
    this.addLead.phone = "";
    this.addLead.address = "";
    this.addLead.emailId = "";
    this.addLead.gender = "M";
    this.addLead.city = "";
    this.addLead.source = "-1";
    this.addLead.referredBy = "-1";
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
    this.searchCampaign(startindex);
  }

  /* Fetches Data as per the user selected batch size */
  updateTableBatchSize(num) {
    this.pageIndex = 1;
    this.displayBatchSize = parseInt(num);
    this.searchCampaign(this.startindex);
  }

  toggleFilter() {
    var x = document.getElementById("advance_filter");
    if (x.style.display == "none" || x.style.display == "") {
      x.style.display = "flex";
      this.jsonFlag.toggle = true;
    } else {
      x.style.display = "none";
      this.jsonFlag.toggle = false;
    }
  }
}
