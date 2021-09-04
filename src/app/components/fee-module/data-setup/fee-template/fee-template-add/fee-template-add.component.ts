import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../../../services/common-service';
import { FeeStrucService } from '../../../../../services/feeStruc.service';

@Component({
  selector: 'app-fee-template-add',
  templateUrl: './fee-template-add.component.html',
  styleUrls: ['./fee-template-add.component.scss']
})
export class FeeTemplateAddComponent implements OnInit {
  
  showDefaultTemplate: any='0';
  masterCourseList: any = [];
  CourseList: any = [];
  countryAdditioalFeeTypes: any = {};
  tax_type_without_percentage : String ;

  addNewTemplate = {
    template_name: '',
    fee_amount: "",
    master_course_name: '',
    course_id: -1,
    tax_type: "inclusive",
    apply_tax: false,
    tax_amount: 0,
    total_fee: 0,
    installmentCount: '',
    is_default_template: false,
    country_id: -1
  }
  additionalInstallment = {
    days: 0,
    day_type: 1,
    fee_type: -1,
    fees_amount: 0,
    initial_fee_amount: 0,
    is_referenced: 'N',
    schedule_id: 0,
    service_tax: 0,
    service_tax_applicable: 'N',
    fee_type_name: '',
    country_id: -1
  }

  feeStructure: any = [];
  installMentTable: any = [];
  otherInstList: any = [];
  otherFeetype: any = [];
  countryDetails: any = [];
  totalAmount: any = 0;
  discountAmount: any = 0
  showDetails: boolean = false;
  enableTaxOptions: any = 0;
  isLangInstitute: boolean = false;
  moduleState: any;
  selectedCountry: any;
  schoolModel: boolean = false;

  constructor(
    private apiService: FeeStrucService,
    private route: Router,
    private auth: AuthenticatorService,
    private commonService: CommonServiceFactory
  ) {
  }

  ngOnInit() {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isLangInstitute = true;
          this.moduleState = 'Batch';
        } else {
          this.isLangInstitute = false;
          this.moduleState = 'Course';
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
    this.enableTaxOptions = sessionStorage.getItem('enable_tax_applicable_fee_installments');
    this.showDefaultTemplate = sessionStorage.getItem('enable_fee_template_country_wise');
    this.tax_type_without_percentage=sessionStorage.getItem("tax_type_without_percentage");
    this.getAllMasterCourseList();
    this.getDetailOfFeeStructur();
    this.fetchDataForCountryDetails();
  }

  changesValuesAsPerType(row) {
    if (row.day_type == 1) {
      row.days = 0;
    }
  }

  fetchDataForCountryDetails() {
    this.countryAdditioalFeeTypes = {};
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      let country_ids = [];
      this.countryDetails.forEach((item) => {
        this.countryAdditioalFeeTypes[item.id] = [];
        country_ids.push(item.id);
      })

      this.apiService.additionalFeeTypeDetail(country_ids.join()).subscribe(
        (res: any) => {
          res && res.forEach(fee => {
            const country_id = fee.countryId.country_id;
            let fee_details = {};
            fee_details[fee.fee_type_id] = fee.fee_type;
            this.countryAdditioalFeeTypes[country_id].push(fee_details);
          });
        },
        err => {
          this.commonService.showErrorMessage('error', '', err.error.message);
        }
      )
    }
    // console.log(data);
  }

  getDetailOfFeeStructur() {
    this.apiService.fetchFeeDetail(0).subscribe(
      (res: any) => {
        this.feeStructure = res;
      },
      err => {
        this.commonService.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  getAllMasterCourseList() {
    if (this.isLangInstitute) {
      this.apiService.getAllStandard().subscribe(
        res => {
          this.masterCourseList = res;
        },
        err => {
          //console.log(err);
        }
      )
    } else {
      this.apiService.getMasterCourse().subscribe(
        res => {
          this.masterCourseList = res;
        },
        err => {
          this.commonService.showErrorMessage('error', '', err.error.message);
        }
      )
    }
  }

  onMasterCourseSelection() {
    this.CourseList = [];
    if (this.addNewTemplate.master_course_name != "-1") {

      if (this.isLangInstitute) {
        this.apiService.getCoursesOfStandard(this.addNewTemplate.master_course_name).subscribe(
          res => {
            this.CourseList = res;
          },
          err => {
            //console.log(err);
          }
        )
      } else {
        this.apiService.getCourse(this.addNewTemplate.master_course_name).subscribe(
          res => {
            this.CourseList = res;
          },
          err => {
            this.commonService.showErrorMessage('error', '', err.error.message);
          }
        )
      }
    }
  }

  onAmountKeyUp() {
    switch (this.addNewTemplate.tax_type) {
      case 'inclusive': {
        this.calculateAmount(true);
        break;
      }
      case 'exclusive': {
        this.calculateAmount(false);
        break;
      }
    }
  }

  onTaxTypeChanges() {
    switch (this.addNewTemplate.tax_type) {
      case 'inclusive': {
        this.addNewTemplate.apply_tax = true;
        this.calculateAmount(true);
        break;
      }
      case 'exclusive': {
        this.addNewTemplate.apply_tax = true;
        this.calculateAmount(false);
        break;
      }
    }
  }

  calculateAmount(taxInclusive) {
    if (taxInclusive == true) {
      this.addNewTemplate.tax_amount = Math.floor(Number(this.addNewTemplate.fee_amount)) - Math.floor(Number(this.addNewTemplate.fee_amount) * 100 / (100 + this.feeStructure.registeredServiceTax));
      this.addNewTemplate.total_fee = Number(this.addNewTemplate.fee_amount);
    } else {
      this.addNewTemplate.tax_amount = Math.floor(Number(this.addNewTemplate.fee_amount) * (this.feeStructure.registeredServiceTax) * .01);
      this.addNewTemplate.total_fee = Number(this.addNewTemplate.fee_amount + this.addNewTemplate.tax_amount);
    }
  }

  createInstallment() {
    this.onTaxTypeChanges();
    let check = this.validateAllFields();
    if (!check) {
      this.showDetails = false;
      return;
    }
    this.showDetails = true;
    this.createInstallmentTable();
  }

  // set editional fee as per country --laxmi 
  selectedCountryCode(country_id) {
    this.selectedCountry = null;
    this.otherInstList = [];
    this.showDetails = false;
    this.countryDetails.forEach(country => {
      if (country.id == Number(country_id)) {
        this.selectedCountry = country;
      }
    });
    console.log(this.selectedCountry);
    this.fillFeeType(this.countryAdditioalFeeTypes[country_id]);
    this.clearManageFee();
    this.additionalInstallment.country_id = this.addNewTemplate.country_id = country_id;
    this.addNewTemplate.tax_type = 'inclusive';
    this.calculateAmount(true);
    this.installMentTable && this.installMentTable.length && this.installMentTable.forEach(installement => {
      installement.country_id = country_id;
    });
  }

  createInstallmentTable() {
    this.installMentTable = [];
    let amount: any = Math.floor(Number(this.addNewTemplate.fee_amount) / Number(this.addNewTemplate.installmentCount));
    let tax_amount = Math.floor(this.addNewTemplate.tax_amount / Number(this.addNewTemplate.installmentCount));
    let totalAmount: number = 0;
    let taxAmount: number = 0;
    let obj = [];
    this.additionalInstallment.country_id = this.addNewTemplate.country_id;
    for (let i = 0; i < Number(this.addNewTemplate.installmentCount); i++) {
      let test: any = {};
      test.day_type = 1;
      test.days = 0;
      if (this.enableTaxOptions == "1" ) {
        if (this.addNewTemplate.tax_type == "inclusive") {
          test.initial_fee_amount = amount - tax_amount;
          test.tax = tax_amount;
        } else {
          test.initial_fee_amount = amount;
          test.tax = tax_amount;
        }
        test.service_tax_applicable = "Y";
      } else {
        test.initial_fee_amount = amount;
        test.tax = 0;
      }
      test.totalAmount = test.tax + test.initial_fee_amount;
      taxAmount = taxAmount + test.tax;
      totalAmount = totalAmount + test.totalAmount;
      test.country_id = Number(this.addNewTemplate.country_id);
      obj.push(test);
    }
    if (Number(this.addNewTemplate.total_fee) != totalAmount) {
      let lastInstallment: any = obj[obj.length - 1];
      lastInstallment.totalAmount = lastInstallment.totalAmount + Number(this.addNewTemplate.total_fee) - totalAmount;
      if (this.enableTaxOptions == '1') {
        lastInstallment.initial_fee_amount = Math.floor(Number(lastInstallment.totalAmount * 100 / (100 + this.feeStructure.registeredServiceTax)))
        lastInstallment.tax = lastInstallment.totalAmount - lastInstallment.initial_fee_amount;
      } else {
        lastInstallment.tax = 0;
        lastInstallment.initial_fee_amount = lastInstallment.totalAmount;
      }
      obj[obj.length - 1] = lastInstallment;
    }
    // if (Number(this.addNewTemplate.tax_amount) != taxAmount) {
    //   let length = obj.length;
    //   obj[length - 1].tax = obj[length - 1].tax + Number(this.addNewTemplate.tax_amount) - taxAmount;
    // }
    this.installMentTable = obj;
  }

  onAdditionalFeeSelection(event) {
    let id = event;
    this.apiService.getAdditionalFeeDeatails(event).subscribe(
      (res: any) => {
        this.additionalInstallment.initial_fee_amount = res.fee_amount;
        this.additionalInstallment.service_tax = res.fee_type_tax;
        this.additionalInstallment.fee_type = res.fee_type_id;
        this.additionalInstallment.country_id = this.addNewTemplate.country_id;
        if (res.fee_type_tax > 0) {
          this.additionalInstallment.service_tax_applicable = "Y";
        }
        this.additionalInstallment.fee_type = id;
        this.additionalInstallment.fees_amount = res.fee_amount + (res.fee_amount * res.fee_type_tax * 0.01);
        this.additionalInstallment.fee_type_name = res.fee_type;
      },
      err => {
        this.commonService.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  validateAllFields() {
    if (this.addNewTemplate.template_name == "" || null) {
      this.commonService.showErrorMessage('error', '', 'Template name can not be null');
      return false;
    }
    if (this.addNewTemplate.fee_amount == "" || 0) {
      this.commonService.showErrorMessage('error', '', 'Please enter valid amount');
      return false;
    }
    if (this.addNewTemplate.installmentCount == "" || 0) {
      this.commonService.showErrorMessage('error', '', 'Installment Count can not be zero');
      return false;
    }
    if (this.addNewTemplate.is_default_template) {
      if (this.addNewTemplate.master_course_name == "" || this.addNewTemplate.course_id == -1) {
        this.commonService.showErrorMessage('error', '', 'Please enter Master Course and Course to use is default template.');
        return false;
      }
    }
    return true;
  }

  addAdditionalInst() {
    if (this.additionalInstallment.fee_type == -1) {
      this.commonService.showErrorMessage('error', '', 'Please Select Fee Type');
      return;
    }
    if (Number(this.additionalInstallment.initial_fee_amount) > 0) {
      if (this.additionalInstallment.fees_amount == 0) {
        if (this.additionalInstallment.service_tax == 0) {
          this.additionalInstallment.fees_amount = this.additionalInstallment.initial_fee_amount;
        }
      } else {
        if (this.additionalInstallment.service_tax == 0) {
          this.additionalInstallment.fees_amount = this.additionalInstallment.initial_fee_amount;
        } else {
          this.additionalInstallment.fees_amount = Math.round(Number(this.additionalInstallment.initial_fee_amount) + Number((this.additionalInstallment.initial_fee_amount * this.additionalInstallment.service_tax) / 100));
        }
      }
      this.otherInstList.push(this.additionalInstallment);
      this.clearManageFee();
    }
  }

  clearManageFee() {
    this.additionalInstallment = {
      days: 0,
      day_type: 1,
      fee_type: -1,
      fees_amount: 0,
      initial_fee_amount: 0,
      is_referenced: 'N',
      schedule_id: 0,
      service_tax: 0,
      service_tax_applicable: 'N',
      fee_type_name: '',
      country_id: this.additionalInstallment.country_id
    }
  }


  fillFeeType(data) {
    this.otherFeetype = [];

    data.forEach(object => {
      let keys = Object.keys(object);
      let test: any = {};
      test.id = keys[0];
      test.value = object[keys[0]];
      this.otherFeetype.push(test);
    });

  }

  createFeeTemplate() {
    let tax: any;
    let defaultValue: any;
    if (this.addNewTemplate.is_default_template) {
      defaultValue = '1';
    } else {
      defaultValue = '0';
    }
    if (this.addNewTemplate.apply_tax ) {
      tax = "Y";
    } else {
      tax = "N";
    }
    let feeSch: any = this.makeJSONForCustomFee();
    if (feeSch == false) {
      return;
    }
    let data: any = {
      is_default: defaultValue,
      country_id: this.addNewTemplate.country_id,
      customFeeSchedules: feeSch,
      studentwise_total_fees_amount: this.totalAmount.toString(),
      studentwise_total_fees_discount: 0,
      studentwise_fees_tax_applicable: tax,
      template_id: 0,
      template_name: this.addNewTemplate.template_name
    };
    if (this.isLangInstitute) {
      data.course_id = '-1';
      data.subject_id = this.addNewTemplate.course_id;
    } else {
      data.course_id = this.addNewTemplate.course_id;
    }

    if (!this.auth.isRippleLoad.getValue()) {
      this.auth.showLoader();
      this.apiService.updateFeeTemplate(data).subscribe(
        res => {
          this.auth.hideLoader();
          this.commonService.showErrorMessage('success', 'Updated', 'Fee Structure created Successfully');
          this.route.navigateByUrl('/view/fee/data-setup/fee-template/home');
        },
        err => {
          this.auth.hideLoader();
          this.commonService.showErrorMessage('error', '', err.error.message);
        }
      )
    }

  }

  makeJSONForCustomFee() {
    this.totalAmount = 0;
    let data: any = [];
    let registeredServiceTax = 0;
    if (this.addNewTemplate.apply_tax) {
      registeredServiceTax = this.feeStructure.registeredServiceTax;
    }

    for (let t = 0; t < this.installMentTable.length; t++) {
      let test: any = {};
      test.fee_type = 0;
      test.initial_fee_amount = this.installMentTable[t].initial_fee_amount.toString();
      test.service_tax = registeredServiceTax;
      test.fees_amount = this.installMentTable[t].totalAmount;
      test.service_tax_applicable = this.installMentTable[t].service_tax_applicable;
      test.day_type = this.installMentTable[t].day_type.toString();
      test.days = Number(this.installMentTable[t].days).toString();
      this.totalAmount = this.totalAmount + Number(test.fees_amount);
      data.push(test);
    }
    if (this.totalAmount != this.addNewTemplate.total_fee) {
      this.commonService.showErrorMessage('error', '', 'Amount provided in installments doesnot match with total Amount');
      return false;
    }
    for (let t = 0; t < this.otherInstList.length; t++) {
      let test: any = {};
      test.fee_type = this.otherInstList[t].fee_type;
      test.initial_fee_amount = this.otherInstList[t].initial_fee_amount.toString();
      test.service_tax = this.otherInstList[t].service_tax.toString();
      test.fees_amount = this.otherInstList[t].fees_amount.toString();
      test.service_tax_applicable = 0;
      if (this.addNewTemplate.apply_tax ) {
        test.service_tax_applicable = this.otherInstList[t].service_tax_applicable;
      }
      test.schedule_id = this.otherInstList[t].schedule_id.toString();
      test.is_referenced = this.otherInstList[t].is_referenced;
      test.day_type = this.otherInstList[t].day_type.toString();
      test.days = Number(this.otherInstList[t].days).toString();
      this.totalAmount = this.totalAmount + this.otherInstList[t].fees_amount;
      data.push(test);
    }
    return data;
  }


  userChangedInitialAmount(data, event) {
    if (data.service_tax_applicable == "Y") {
      data.tax = Math.floor(data.initial_fee_amount * 0.01 * this.feeStructure.registeredServiceTax);
      data.totalAmount = Math.floor(data.initial_fee_amount + data.tax);
    } else {
      data.tax = 0;
    }
  }

  userChangedAmountTotalAmount(data, event) {
    if (data.service_tax_applicable == "Y") {
      data.tax = Math.floor(data.totalAmount - Math.floor(Number(data.totalAmount) * 100 / (100 + this.feeStructure.registeredServiceTax)));
      data.initial_fee_amount = Math.floor(Number(data.totalAmount - data.tax));
    } else {
      data.initial_fee_amount = Math.floor(Number(data.totalAmount));
      data.tax = 0;
    }
  }

  userChangeAdditionalFeeAmount(data, event) {
    let input = Math.floor(Number(event.currentTarget.value))
    if (data.service_tax > 0) {
      let tax = Math.floor(input - Math.floor(Number(input) * 100 / (100 + data.service_tax)));
      data.initial_fee_amount = Math.floor(input - tax);
      if (Number(data.initial_fee_amount + tax) != input) {
        data.initial_fee_amount = Math.floor(data.initial_fee_amount + input - Number(data.initial_fee_amount + tax));
      }
    } else {
      data.initial_fee_amount = input;
      data.tax = 0;
    }
  }

  deleteAdditionalRow(row, index) {
    this.otherInstList.splice(index, 1);
  }

}
