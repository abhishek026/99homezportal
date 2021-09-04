import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { PostEnquiryDataService } from '../../../services/enquiry-services/post-enquiry-data.service';
import { FetchprefilldataService } from '../../../services/fetchprefilldata.service';
import { MessageShowService } from '../../../services/message-show.service';
/**  custome fields changes 
 * updated by laxmi wapte
 */
@Component({
  selector: 'student-custom-comp',
  templateUrl: './student-custom-comp.component.html',
  styleUrls: ['./student-custom-comp.component.scss']
})

export class StudentCustomComponent implements OnInit {

  componentShell: any[] = [];
  userCreatedComponent: any[] = [];
  isDelete: boolean = false;
  isEdit: string = '';
  editCustomComponentForm: any = {
    comp_length: "",
    description: "",
    institution_id: sessionStorage.getItem('institute_id'),
    is_required: "N",
    is_searchable: "N",
    label: "",
    page: 2,
    prefilled_data: "",
    sequence_number: "",
    type: "",
    defaultValue: ""
  }

  constructor(
    private prefill: FetchprefilldataService,
    private postdata: PostEnquiryDataService,
    private auth:AuthenticatorService,
    private msgService: MessageShowService
  ) {
  }

  ngOnInit() {
    this.fetchPrefillData();
  }

  /* fetches list of user created component and the default type */
  fetchPrefillData() {
    this.auth.showLoader();
    this.prefill.fetchComponentGenerator().subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.componentShell = res;
      },(err)=>{
        this.auth.hideLoader();
      }
    );

    this.auth.showLoader();
    return this.prefill.fetchUserCreatedComponentStudent().subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.userCreatedComponent = res;
      },(err)=>{
        this.auth.hideLoader();
      }
    );
  }

  /* toggle the visibility of the the new component created */
  toggleNewComponentVisisbility(type) {
    this.isEdit = type;
    this.emptyObject();
  }

  addNewCustomComponent() {
    //Case 1 Label/Type is not empty and MaxLength and Sequence
    if (this.editCustomComponentForm.label != "" && this.editCustomComponentForm.label != " "
      && this.editCustomComponentForm.type != "") {

      //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
      if (this.editCustomComponentForm.type == "3" || this.editCustomComponentForm.type == "4") {
        /* Validate Prefilled Data */
        if (this.validateDropDown(this.editCustomComponentForm.prefilled_data)) {
          if (this.validateDropdownDefvalue(this.editCustomComponentForm.prefilled_data, this.editCustomComponentForm.defaultValue)) {
            this.auth.showLoader();
            this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(
              res => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', 'Form-Field  Updated Successfully');
                this.cancelEditRow();
              },
              err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', '', 'Label name is already created with the same name');
              }
            );
          }
          else {
            this.msgService.showErrorMessage('error', '', 'dropdown default value should be present in prefilled data');
          }
        }
        else {
          this.msgService.showErrorMessage('error', '', 'Prefill data has to be unique and non-empty');
        }
      }

      /* Date Custom Component */
      else if (this.editCustomComponentForm.type == "5") {
        /* Date cannot be searchable and does not a default value */
        if (this.editCustomComponentForm.is_searchable == "N" && this.editCustomComponentForm.defaultValue.trim() == "") {
          this.auth.showLoader();
          this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(
            res => {
              this.auth.hideLoader();
              this.msgService.showErrorMessage('success', '', 'Form-Field Updated Successfully');
              this.fetchPrefillData();
            },
            err => {
              this.auth.hideLoader();
              this.msgService.showErrorMessage('error', '', 'There was an error processing your request' +err.error.message);
            }
          );
        }
        else {
          this.msgService.showErrorMessage('error', 'Date Field Cannot Be Searchable Or have any default value', '');
        }
      }

      /* Textbox and Checkbox */
      else if (this.editCustomComponentForm.type != "3" && this.editCustomComponentForm.type != "4" && this.editCustomComponentForm.type != "5") {
        this.auth.showLoader();
        this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(
          res => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage('success', 'Form-Field Updated Successfully', '');
            this.cancelEditRow();
          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage('error', '', 'Label name is already created with the same name');
          }
        );
      }

    }
    else {
      this.msgService.showErrorMessage('error', '', 'Please mention a Label/Type');
    }
  }

  isDefaultEmpty(obj): boolean {
    if (obj.defaultValue) {
      return true;
    }
  }

  validateDropDown(data) {
    let arr: any[] = data.split(',');
    /* boolean for non empty value */
    let test1 = arr.every(function checkNonEmpty(el) {
      return (el != "" && el != " ");
    });
    /* convert array to set unique value */
    this.editCustomComponentForm.prefilled_data = Array.from(new Set(arr)).join(',');
    return test1
  }

  validateDropdownDefvalue(tocheck, tomatch) {
    let arr = tocheck.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (tomatch === arr[i].trim()) {
        return true;
      }
    }
    return false;
  }

  validateDropDownUpdate(data) {
    let arr: any[] = data.split(',');
    /* boolean for non empty value */
    let test1 = arr.every(function checkNonEmpty(el) {
      return (el != "" && el != " ");
    });
    /* convert array to set unique value */
    return test1
  }

  editRow(data) {
    this.editCustomComponentForm = data;
    this.isEdit = 'Edit';
  }

  cancelEditRow() {
    this.emptyObject();
    this.fetchPrefillData();
    this.isEdit = '';
  }


  updateRow() {
    let data = this.editCustomComponentForm;
    //Case 1 Label/Type is not empty and MaxLength and Sequence
    if (data.label.trim() != "" && data.type != "") {

      //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
      if (data.type == "3" || data.type == "4") {
        /* Validate Prefilled Data */
        if (this.validateDropDown(data.prefilled_data)) {
          if (this.validateDropdownDefvalue(data.prefilled_data, data.defaultValue)) {
            this.postdata.updateCustomComponent(data).subscribe(
              res => {
                this.msgService.showErrorMessage('success', 'Form-Field Updated', '');
                this.cancelEditRow();
              },
              err => {
                this.msgService.showErrorMessage('error', '', err.error.message);
              }
            );
          }
          else {
            this.msgService.showErrorMessage('error', 'dropdown default value should be present in prefilled data', '');
          }
        }
        else {
          this.msgService.showErrorMessage('error', 'Prefill data has to be unique and non-empty', '');
        }
      }

      /* Date Custom Component */
      else if (data.type == "5") {
        /* Date cannot be searchable and does not a default value */
        if (data.is_searchable == "N" && data.defaultValue.trim() == "") {
          this.postdata.updateCustomComponent(data).subscribe(
            res => {
              this.msgService.showErrorMessage('success', 'Form-Field Updated Successfully', '');
              this.cancelEditRow();
            },
            err => {
              this.msgService.showErrorMessage('error', '', err.error.message);
            }
          );
        }
        else {
          this.msgService.showErrorMessage('error', 'Date Field Cannot Be Searchable Or have any default value','');
        }
      }

      /* Textbox and Checkbox */
      else if (data.type != "3" && data.type != "4" && data.type != "5") {
        this.auth.showLoader();
        this.postdata.updateCustomComponent(data).subscribe(
          res => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage('success', 'Form-Field Updated','');
            this.cancelEditRow();
          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage('error', '', err.error.message);
          }
        );
      }

    }
    else {
      this.msgService.showErrorMessage('error', '', 'Please mention a Label/Type');
    }
  }

  emptyObject() {
    this.editCustomComponentForm = {
      comp_length: "",
      description: "",
      institution_id: sessionStorage.getItem('institute_id'),
      is_required: "N",
      is_searchable: "N",
      label: "",
      page: 2,
      prefilled_data: "",
      sequence_number: "",
      type: "",
      defaultValue: ""
    }
  }

  //this function set default max length  50 when type is textbox
  checkValuetype(value){
    this.editCustomComponentForm.comp_length = value==1 ? 50:0
  }

  deleteRow(data) {
    this.editCustomComponentForm = data;
    this.isDelete = true;
  }

  cancelRow() {
    this.isDelete = false;
    this.isEdit ='';
    this.emptyObject();
  }

  DeleteRowConfirmed() {
    let data = this.editCustomComponentForm;
    this.auth.showLoader();
    this.postdata.deleteCustomComponent(data.component_id).subscribe(
      res => {
        this.auth.hideLoader();
        this.isDelete = false;
        this.msgService.showErrorMessage('success', 'Form-field Deleted', 'requested form-field deleted successfully');
        this.cancelEditRow();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage('error', '', err.error.message);
        this.cancelRow();
      }
    );
  }
}

