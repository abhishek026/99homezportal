import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { ProductService } from '../../../../services/products.service';

@Component({
  selector: 'app-online-class',
  templateUrl: './online-class.component.html',
  styleUrls: ['./online-class.component.scss']
})
export class OnlineClassComponent implements OnInit {

  prod_free: any;
  selectedPeople1: any;
  people: any;
  @Input() entity_id: any;
  @Input() prodForm: any;
  @Output() nextForm = new EventEmitter<string>();
  @Output() startForm = new EventEmitter<string>();
  @Output() toggleLoader = new EventEmitter<boolean>();
  @Output() previewEvent = new EventEmitter<boolean>();
  products_ecourse_maps: any[] = [];
  ecourseList: any = [];
  mock_count: number = 0;
  online_count: number = 0;
  description: string = '';
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
    private auth: AuthenticatorService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    //Fetch Product Groups List

    if (this.entity_id && this.entity_id.length > 0) {
      //Fetch Product Info
      this.auth.showLoader();
      this.http.getMethod('product/get/' + this.entity_id, null).subscribe(
        (resp: any) => {
          this.auth.hideLoader();
          let response = resp.result;
          if (resp.validate) {
            this.prodForm = response;
            let productData = response;
            this.description = response.page_description['Online_Class'];;
            this.prodForm.product_item_stats = {};
            this.prodForm.product_items_types.forEach(element => {
              this.prodForm.product_item_stats[element.slug] = true;
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

  }

  // update parent state data
  updateProductItemStates(event, item) {
    if (item) {
      this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
    }
    // console.log(this.prodForm);
    this.previewEvent.emit(this.prodForm);

  }

  gotoBack() {
    this.router.navigateByUrl('/view/e-store/details');
  }

  gotoNext() {
    if (this.description == undefined || this.description == '') {
      this.msgService.showErrorMessage('error', 'Please add description', '');
      return
    }

    if (this.description.length > 5000) {
      this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
      return;
    }

    if ((!this.auth.isRippleLoad.getValue())) {
      //update test List
      let obj = {
        "page_type": "Online_Class",
        "status": this.prodForm.status,
        "is_advance_product": this.prodForm.is_advance_product,
        "item_list": [],
        "description": this.description,
        "is_paid" : this.prodForm.is_paid
      }
      this.auth.showLoader();
      this.http.postMethod('product-item/update/' + this.entity_id, obj).then(
        (resp: any) => {
          this.auth.hideLoader();
          let response = resp['body'];
          if (response.validate) {
            let details = response.result;
            this.prodForm.product_item_list = details;
            this.msgService.showErrorMessage('success', "Product updated successfully !", '');
            this.nextForm.emit();
          }
          else {
            this.msgService.showErrorMessage('error', response.error[0].error_message, '');
          }
        },
        (err) => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
        });
    }
  }
}
