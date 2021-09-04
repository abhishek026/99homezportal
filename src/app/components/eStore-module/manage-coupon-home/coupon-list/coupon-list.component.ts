import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { ProductService } from '../../../../services/products.service';
import { ExcelService } from '../../../../services/excel.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
  searchFilter: {
    productId: string,
    status: string
  };
  varJson: any = {
    PageIndex: 1,
    sizeArr: [5, 25, 50, 100, 150, 200, 500],
    displayBatchSize: 25,
    total_items: 0
  };
  productList: any[] = [];
  couponData: any[] = [];
  tempData: any = {};

  constructor(
    private _productService: ProductService,
    private _msgService: MessageShowService,
    private auth: AuthenticatorService,
    private _excelService: ExcelService,
  ) { }

  ngOnInit() {
    this.searchFilter = {
      productId: 'All',
      status: '-1'
    };
    this.fectchTableDataByPage(1);
    this.getProductList();
  }

  getProductList() {
    this.auth.showLoader();
    this._productService.getMethod('product/get-product-list?status=30', null).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.productList = data.result;
      },
      err => {
        this.auth.hideLoader();
        this._msgService.showErrorMessage('error', '', err.error.message);
      }
    );
  }

  setdelete(data) {
    this.tempData = data;
  }

  deleteCoupon(obj) {
    this.auth.showLoader();
    const url = `offer/delete/${obj.offer_id}`;
    this._productService.getMethod(url, null).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this._msgService.showErrorMessage('success', '', res.result);
        this.couponData = this.couponData.filter(s => s.offer_id !== obj.offer_id);
      },
      (err) => {
        this.auth.hideLoader();
        console.log(err);
      }
    );

  }

  /*** pagination functions */
  /* Fetch next set of data from server and update table */
  fetchNext() {
    this.varJson.PageIndex++;
    this.fectchTableDataByPage(this.varJson.PageIndex);
  }

  /* Fetch previous set of data from server and update table */
  fetchPrevious() {
    this.varJson.PageIndex--;
    this.fectchTableDataByPage(this.varJson.PageIndex);
  }

  updateTableBatchSize(num) {
    this.varJson.PageIndex = 1;
    this.varJson.displayBatchSize = parseInt(num);
    this.fectchTableDataByPage(this.varJson.PageIndex);
  }

  /* Fetch table data by page index */
  fectchTableDataByPage(index) {
    this.varJson.PageIndex = index;
    const object = {
      'productId': this.searchFilter.productId,
      'status': this.searchFilter.status,
      'pageNo': this.varJson.PageIndex,
      'noOfRecord': this.varJson.displayBatchSize,
      'offerType': 1
    };
    this.auth.showLoader();
    this._productService.getMethod('offer-map/advance-filter', object).subscribe(
      (resp: any) => {
        this.auth.hideLoader();
        if (resp.validate) {
          this.couponData = resp.result.results;
          if (this.couponData) {
            this.couponData.forEach(element => {
              if (element.status === '1') {
                element.status = 'Active';
              } else if (element.status === '2') {
                element.status = 'Inactive';
              } else {
                element.status = 'Expired';
              }
            });
          }
          this.varJson.total_items = resp.result.total_records;
        } else {
          this.auth.hideLoader();
          this._msgService.showErrorMessage('error', 'something went wrong, try again', '');
        }
      },
      (err) => {
        this.auth.hideLoader();
        this._msgService.showErrorMessage('error', 'something went wrong, try again', '');
      });

  }

  clearFilter() {
    this.searchFilter = {
      productId: 'All',
      status: '-1'
    };
  }
  /** this function is used to download execel
     * written by Ashwini
    */
  exportToExcel() {
    let exportedArray: any[] = [];
    this.couponData.map((data: any) => {
      let obj = {};
      obj["Offer Code"] = data.offer_code;
      obj["Product Name"] = data.product_name[0];
      obj["Start Date"] = data.strat_date;
      obj["End Date"] = data.end_date;
      obj["Status"] = data.status;
      console.log(data.product_name);
      exportedArray.push(obj);
    })

    this._excelService.exportAsExcelFile(
      exportedArray,
      'eStore Manage Offer'
    )
  }
  // End

}
