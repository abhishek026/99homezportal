import { Component, OnInit, Output, Input, ElementRef, HostListener, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MessageShowService } from '../../../../services/message-show.service';
import { HttpService  } from '../../../../services/http.service';
import { AuthenticatorService } from '../../../../services/authenticator.service';
declare var $;

@Component({
  selector: 'app-add-edit-payer',
  templateUrl: './add-edit-payer.component.html',
  styleUrls: ['./add-edit-payer.component.scss']
})
export class AddEditPayerComponent implements OnInit {

  @Output() closePopup = new EventEmitter<boolean>();
  @Input() isEditPayer: boolean;
  @Input() editPayerId: any;

  // global variables
  jsonFlag = {
    isProfessional: false,
    institute_id: '',
    isRippleLoad: false
  };

  payerDetails = {
    title: 'Mr.',
    name: '',
    vendorType: '',
    primaryContactNo: '',
    companyName: '',
    secondaryContactNo: '',
    emailId: '',
    displayName: '',
    address: '',
    notes: ''
  };

  editPartyDetails: any;
  partyDetails: any[] = [];

  constructor(
    private msgService: MessageShowService,
    private httpService: HttpService,
    private auth:AuthenticatorService
  ) {
    this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
  }

  ngOnInit() {
    $('#addPayerModal').modal('show');
    this.getVendorDetails()
    if(this.isEditPayer){
      this.setEditValues();
    }
  }

  getVendorDetails(){
    this.auth.showLoader();
    const url = `/api/v1/masterData/type/PARTY_TYPE`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if(res.length > 0){
          for (let index = 0; index < res.length; index++) {
            if(res[index].data_value == 'Customer'){
              this.partyDetails.push(res[index]);
              this.payerDetails.vendorType = this.partyDetails[0].data_key;
            }
          }
        }
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  setEditValues(){
    this.auth.showLoader();
    const url = `/api/v1/payment/party/${this.editPayerId}`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.editPartyDetails = res;
        this.setValue();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  setValue(){
    this.payerDetails.name = this.editPartyDetails.name;
    this.payerDetails.address = this.editPartyDetails.address;
    this.payerDetails.vendorType = this.editPartyDetails.type;
    this.payerDetails.companyName = this.editPartyDetails.company_name;
    this.payerDetails.displayName = this.editPartyDetails.display_name;
    this.payerDetails.emailId = this.editPartyDetails.email_id;
    this.payerDetails.primaryContactNo = this.editPartyDetails.primary_mobile_no;
    this.payerDetails.secondaryContactNo = this.editPartyDetails.secondary_phone_no;
    this.payerDetails.notes = this.editPartyDetails.notes;
    this.payerDetails.title = this.editPartyDetails.title;
  }

  savepayerDetails(){
    if(this.payerDetails.emailId.trim() != ""){
      if(!this.ValidateEmail(this.payerDetails.emailId)){
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid email Id');
        return;
      }
    }
    if(this.payerDetails.primaryContactNo.trim() != "" && this.payerDetails.primaryContactNo.length < 10){
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid primary contact number');
      return;
    }
    if(this.payerDetails.secondaryContactNo.trim() != "" && this.payerDetails.secondaryContactNo.length < 10){
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid secondary contact number');
      return;
    }
    if(this.payerDetails.displayName.trim() != ""){
      let obj = {
        name: this.payerDetails.name,
        address: this.payerDetails.address,
        institution_id: this.jsonFlag.institute_id,
        type: this.payerDetails.vendorType,
        company_name: this.payerDetails.companyName,
        display_name: this.payerDetails.displayName,
        email_id: this.payerDetails.emailId,
        primary_mobile_no: this.payerDetails.primaryContactNo,
        secondary_phone_no: this.payerDetails.secondaryContactNo,
        notes: this.payerDetails.notes,
        title: this.payerDetails.title,
        party_id: ''
      }
      const url = `/api/v1/payment/party`;
      if(this.isEditPayer){
        obj.party_id = this.editPartyDetails.party_id;
        this.auth.showLoader();
        this.httpService.putData(url, obj).subscribe(
          (res: any) => {
            this.auth.hideLoader();
            if(res.statusCode == 200){
              this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Details updated successfully');
              this.closePopups(false);
            }
          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          }
        )
      }
      else{
        delete obj.party_id;
        this.auth.showLoader();
        this.httpService.postData(url, obj).subscribe(
          (res: any) => {
            this.auth.hideLoader();
            if(res.statusCode == 200){
              this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Payer added successfully');
              this.closePopups(false);
            }
          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          }
        )
      }

    }
    else{
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Display Name!');
    }
  }

  ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  closePopups($event) {
    $('#addPayerModal').modal('hide');
    this.closePopup.emit(false);
  }

}
