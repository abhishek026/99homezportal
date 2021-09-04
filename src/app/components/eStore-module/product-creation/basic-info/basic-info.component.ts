import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Router } from '../../../../../../node_modules/@angular/router';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { ProductService } from '../../../../services/products.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() entity_id: any;
  productItems: any = [];
  @Input() product_item_stats: any;
  product_item_list: any[] = [];
  isAdvanceProductEdit: boolean = false;
  @Output() nextForm = new EventEmitter<string>();
  @Output() startForm = new EventEmitter<string>();
  @Output() toggleLoader = new EventEmitter<boolean>();
  @Output() previewEvent = new EventEmitter<boolean>();
  ecourseList: any = [];
  products_ecourse_maps: any[] = [];
  itemStates: any[] = [];
  prodItems: any = {}
  advanceProductItems: any = {};
  moderatorSettings: any = {
    singleSelection: false,
    idField: 'course_type_id',
    textField: 'course_type',
    enableCheckAll: false
  };

  others: any;
  // prodForm = new product_details();
  prodForm: any = {
    entity_id: 0,
    title: '',
    exams: '',
    product_image: '',
    exam_ids: [],
    // product_group_id: null,
    is_duration: true,
    purchase_limit: 0,
    short_description: '',
    about: '',
    is_paid: true,
    is_advance_product: true,
    tag: null,
    price: 0,
    price_before_discount: 0,
    discount_percentage: 0,
    cateory: 0,
    itemStates: [],
    valid_from_date: moment().format('YYYY-MM-DD'),
    valid_to_date: '',
    sales_from_date: moment().format('YYYY-MM-DD'),
    sales_to_date: moment().format('YYYY-MM-DD'),
    start_timestamp: '',
    end_timestamp: '',
    status: 10,
    duration: 0,
    publish_date: null,
    product_user_type: "-1",
    country_id: "",
    product_item_stats: {
      mock_test: 0,
      online_exams: 0,
      Classroom_Class: 0,
      Online_Class: 0,
      Offline_Material: 0,
      Study_Material: 0,
      Videos: 0,

    }
  };

  advanceProduct = {
    forStudent: true,
    forOpenUser: true
  };
  countryDetails: any = [];
  editorConf = {
    height: 150,
    menubar: false,
    branding: false,
    plugins: [
      'preview anchor',
      'visualblocks code ',
      'insertdatetime  table paste code  wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
  };

  constructor(
    private http: ProductService,
    private msgService: MessageShowService,
    private router: Router,
    private auth: AuthenticatorService) {
  }

  ngOnInit() {
    this.auth.showLoader();
    this.getProductItemsData();
    this.toggleLoader.emit(true);
    this.initDataEcourse();
    this.previewEvent.emit(this.prodForm);
    this.toggleLoader.emit(false);
    let temp: any = JSON.parse(sessionStorage.getItem('country_data'));
    console.log("temp", temp);
    this.fetchDataForCountryDetails();
  }

  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem('country_data');
    let data = JSON.parse(encryptedData);
    if (data.length > 0) {
      this.countryDetails = data;
      let defacult_Country = this.countryDetails.filter((country) => {
        return country.is_default == 'Y';
      })

      if (this.prodForm.country_id == "") {
        this.prodForm.country_id = defacult_Country[0].id;

      }
    }
  }

  /** get product item details in  */
  getProductItemsData() {
    this.http.getMethod('master/item-type/get', null).subscribe(
      (resp: any) => {
        let response = resp.result;
        if (resp.validate) {
          this.productItems = response;
          this.prodForm.product_item_stats = {};
          this.productItems.forEach((element, index) => {
            this.itemStates.push(element);// add states
            this.prodForm.product_item_stats[element.slug] = 0;
            this.prodItems[element.slug] = false;
          });
          if (this.entity_id && this.entity_id.length > 0) {
            this.initForm();
          } else {
            this.auth.hideLoader();
          }
        }
        else {
          this.msgService.showErrorMessage('error', response.errors.message, '');
        }
      },
      (err) => {
        this.msgService.showErrorMessage('error', err['error'].errors.message, '');
      });

  }
  calc() {
    if (this.prodForm.discount_percentage < 0 || this.prodForm.discount_percentage > 100) {

      this.msgService.showErrorMessage('error', 'Discount should be greater than 0 and less than 100', '');
    }
    else {
      this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100)));
    }

  }
  initForm() {
    //Fetch Product Info
    this.auth.showLoader();
    this.http.getMethod('product/get/' + this.entity_id, null).subscribe(
      (resp: any) => {
        this.auth.hideLoader();
        let response = resp.result;
        console.log("REsult", response);
        if (resp.validate) {
          this.prodForm = response;
          if (!(this.prodForm.tag === 'Featured' || this.prodForm.tag === 'Recommended' || this.prodForm.tag === 'Popular' || this.prodForm.tag === 'Others' || this.prodForm.tag == null)) {
            this.others = this.prodForm.tag;
            this.prodForm.tag = "Others";
          }
          this.prodForm.sales_from_date = moment(response.sales_from_date).format('YYYY-MM-DD');
          this.prodForm.sales_to_date = moment(response.sales_to_date).format('YYYY-MM-DD');
          this.prodForm.valid_from_date = moment(response.valid_from_date).format('YYYY-MM-DD');
          this.prodForm.valid_to_date = moment(response.valid_to_date).format('YYYY-MM-DD');
          this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
          this.products_ecourse_maps = [];
          this.prodForm.product_ecourse_maps.forEach((object) => {
            let obj = { course_type: object.course_type, course_type_id: object.course_type_id };
            this.products_ecourse_maps.push(obj);
          });
          this.prodForm.is_duration = this.prodForm.duration ? true : false;
          if (this.prodForm.product_user_type == 8) {
            this.advanceProduct.forStudent = true;
            this.advanceProduct.forOpenUser = true;
          }
          else if (this.prodForm.product_user_type == 16) {
            this.advanceProduct.forStudent = false;
            this.advanceProduct.forOpenUser = false;
          }
          else if (this.prodForm.product_user_type == 2) {
            this.advanceProduct.forStudent = true;
            this.advanceProduct.forOpenUser = false;
          }
          else if (this.prodForm.product_user_type == 4) {
            this.advanceProduct.forStudent = false;
            this.advanceProduct.forOpenUser = true;
          }

          this.prodForm.is_advance_product = this.prodForm.is_advance_product ? true : false;
          this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
          this.prodForm.product_item_stats = {};
          this.advanceProductItems = {};
          this.prodForm.product_items_types.forEach(element => {
            this.itemStates.forEach((object) => {
              if (object.entity_id == element.entity_id) {
                this.prodItems[object.slug] = true;
                this.advanceProductItems[object.slug] = true;
                this.prodForm.product_item_stats[object.slug] = true;
              }
            });
          });
          this.updateProductItemStates(null, null);
        }
        else {
          this.msgService.showErrorMessage('error', response.errors.message, '');
        }
      },
      (err) => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage('error', err['error'].errors.message, '');
      });


  }


  initDataEcourse() {
    this.http.getMethod('ext/get-ecources?isOnline=Y', null).subscribe(
      (resp: any) => {
        let response = JSON.parse(resp.result);
        console.log(response);
        if (resp.validate) {
          this.ecourseList = response;
        }
        else {
          this.msgService.showErrorMessage('error', response.errors.message, '');
        }
      },
      (err) => {
        // this.msgService.showErrorMessage('error', err['error'].errors.message, '');
      });
  }

  gotoBack() {
    this.router.navigateByUrl('/view/e-store/details');
  }

  // update parent state data
  updateProductItemStates(event, item) {
    if (item) {
      this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
    }
    // console.log(this.prodForm);
    this.previewEvent.emit(this.prodForm);

  }

  saveProduct() {
    if (this.prodForm.title == "" ||
      this.prodForm.title == null) {
      this.msgService.showErrorMessage('error', 'Please add product name', '');
      return;
    }
    if (this.prodForm.about == '') {
      this.msgService.showErrorMessage('error', 'Please add description', '');
      return;
    }
    if (this.prodForm.about.length > 10000) {
      this.msgService.showErrorMessage('error', 'allowed description limit is 10000 characters', '');
      return;
    }
    if (this.prodForm.country_id == 0) {
      this.msgService.showErrorMessage('error', 'Currency is mandatory', '');
      return;
    }
    if (this.prodForm.purchase_limit == 0) {
      this.msgService.showErrorMessage('error', 'product sell limit should be greater than zero', '');
      return;
    }

    if (this.products_ecourse_maps.length == 0) {
      this.msgService.showErrorMessage('error', 'please select at least one Ecourse', '');
      return;
    }
    if (this.prodForm.duration <= 0 && this.prodForm.is_duration) {
      this.msgService.showErrorMessage('error', 'please enter product duration ', '');
      return;
    }
    if ((moment(this.prodForm.sales_to_date).valueOf() <= moment(this.prodForm.sales_from_date).valueOf())) {
      this.msgService.showErrorMessage('error', 'sales from date cannot be prior to than sales to date', '');
      return;
    }


    if ((!this.prodForm.is_duration) &&
      (moment(this.prodForm.valid_from_date).valueOf() < moment(this.prodForm.sales_from_date).valueOf())) {
      this.msgService.showErrorMessage('error', 'Product visibility start date cannot be prior to sales start date', '');
      return;
    }
    if (this.prodForm.tag === "Others") {
      this.prodForm.tag = this.others;
    }

    let keys = Object.keys(this.prodItems);
    let notselectedItem = keys.filter(key => this.prodItems[key] == false);
    if (this.productItems.length == notselectedItem.length) {
      this.msgService.showErrorMessage('error', 'select at least one item ', '');
      return;
    }

    this.prodForm.is_paid = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? 'Y' : 'N';
    this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) : 0;
    this.productItems.forEach(element => {
      this.prodForm.product_item_stats[element.slug] = (this.prodItems[element.slug]) ? this.prodForm.product_item_stats[element.slug] : 0;
      if (this.prodForm.product_item_stats[element.slug]) {
        let object = {
          "entity_id": element.entity_id
        }
        this.product_item_list.push(object);
      }
    });

    if (!this.prodForm.is_duration) {
      this.prodForm.duration = 0;
      this.prodForm.valid_from_date = moment(this.prodForm.valid_from_date).format("YYYY-MM-DD");
      this.prodForm.valid_to_date = moment(this.prodForm.valid_to_date).format("YYYY-MM-DD");
    } else {
      this.prodForm.valid_from_date = null;
      this.prodForm.valid_to_date = null;
    }
    let productFor = 16;
    if (this.advanceProduct.forStudent && this.advanceProduct.forOpenUser) {
      productFor = 8;
    }
    else if (this.advanceProduct.forStudent) {
      productFor = 2;
    }
    else if (this.advanceProduct.forOpenUser) {
      productFor = 4;
    }
    this.prodForm.product_user_type = productFor;
    const is_advance_product = this.prodForm.is_advance_product ? 1 : 0;
    let object = {
      "entity_id": this.prodForm.entity_id,
      "title": this.prodForm.title,
      "institute_id": sessionStorage.getItem('institute_id'),
      "logo_url": this.prodForm.logo_url,
      "photo_url": this.prodForm.photo_url,
      "about": this.prodForm.about,
      "is_paid": this.prodForm.is_paid,
      "is_advance_product": is_advance_product,
      "price": this.prodForm.price,
      "valid_from_date": this.prodForm.valid_from_date,
      "valid_to_date": this.prodForm.valid_to_date,
      "duration": this.prodForm.duration,
      "sales_from_date": moment(this.prodForm.sales_from_date).format('YYYY-MM-DD'),
      "sales_to_date": moment(this.prodForm.sales_to_date).format('YYYY-MM-DD'),
      "purchase_limit": this.prodForm.purchase_limit,
      "start_index_for_total_prod_purchase": this.prodForm.start_index_for_total_prod_purchase,
      "status": this.prodForm.status,
      "product_ecourse_maps": this.products_ecourse_maps,
      "product_items_types": this.product_item_list,
      "product_user_type": this.prodForm.product_user_type,
      "publish_date": this.prodForm.publish_date,
      "discount_percentage": this.prodForm.discount_percentage,
      "price_before_discount": this.prodForm.price_before_discount,
      "tag": this.prodForm.tag,
      "country_id": this.prodForm.country_id

    }
    if (this.prodForm.entity_id == null || this.prodForm.entity_id == 0) {
      this.createProduct(object);
    }
    else {
      this.updateProduct(object);
    }
  }




  createProduct(object) {

    if (!this.auth.isRippleLoad.getValue()) {
      this.auth.showLoader();
      this.http.postMethod('product/create', object).then(
        (resp: any) => {
          this.auth.hideLoader();
          let response = resp['body']
          if (response.validate) {
            this.msgService.showErrorMessage('success', "product created successfully", '');
            response.result.product = object;
            this.startForm.emit(response.result);
            this.nextForm.emit();
          }
          else {
            this.msgService.showErrorMessage('error', resp.body.error[0].error_message, '');
          }
        },
        (err:any) => {

          this.auth.hideLoader();
          this.msgService.showErrorMessage('error', err.error.error[0].error_message, '');
        });
    }

  }

  updateProduct(object) {
    if (!this.auth.isRippleLoad.getValue()) {
      let body = JSON.parse(JSON.stringify(object));
      this.auth.showLoader();
      this.http.postMethod('product/update', body).then(
        (resp: any) => {
          this.auth.hideLoader();
          let data = resp['body'];
          if (data.validate) {
            this.msgService.showErrorMessage('success', "Product updated successfully !", '');
            this.nextForm.emit();
          }
          else {
            this.msgService.showErrorMessage('error', resp.body.error[0].error_message, '');
          }
        },
        (err:any) => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage('error', err.error.error[0].error_message, '');
          this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
        });
    }
  }

  convertUTCDateToLocalDate(date_s) {
    // var date =new Date(date_s)
    // var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    // var offset = date.getTimezoneOffset() / 60;
    // var hours = date.getHours();

    // newDate.setHours(hours - offset);
    return moment(date_s).format('YYYY-MM-DD');
  }


  calc_days() {
    // this.prodForm.valid_from_date = moment(this.prodForm.sales_from_date).format('YYYY-MM-DD');
    // this.prodForm.valid_to_date = moment(this.prodForm.sales_from_date).add(this.prodForm.duration, 'd').format('YYYY-MM-DD');
    return (this.prodForm.valid_from_date != '' && this.prodForm.valid_to_date != '') ? Math.ceil(Math.abs((new Date(this.prodForm.valid_to_date).getTime()) - (new Date(this.prodForm.valid_from_date).getTime())) / (1000 * 3600 * 24)) : 'NA';
  }


}
