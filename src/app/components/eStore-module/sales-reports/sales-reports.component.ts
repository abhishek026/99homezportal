import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { ExportToPdfService } from '../../../services/export-to-pdf.service';
import { HttpService } from '../../../services/http.service';
import { MessageShowService } from '../../../services/message-show.service';
import { ProductService } from '../../../services/products.service';
import { TablePreferencesService } from '../../../services/table-preference/table-preferences.service';
import { DataDisplayTableComponent } from '../../shared/data-display-table/data-display-table.component';
import { ColumnData2 } from '../../shared/data-display-table/data-display-table.model';
import { ExcelService } from '../../../services/excel.service';

@Component({
  selector: 'app-sales-reports',
  templateUrl: './sales-reports.component.html',
  styleUrls: ['./sales-reports.component.scss']
})
export class SalesReportsComponent implements OnInit {

  @ViewChild('child', { static: false }) private child: DataDisplayTableComponent;
  @ViewChild('form', { static: false }) form: any;
  feeDataSource: any[] = [];
  displayKeys: any = [];//need for selected keys
  private slotIdArr: any[] = [];
  salesDataSource: any[] = [];
  productLists: any[] = [];
  private selectedSlots: any[] = [];
  private selectedSlotsString: string = '';
  private selectedSlotsID: string = '';
  filterDataKeys = {
    to_date: moment().format("YYYY-MM-DD"),
    from_date: moment().format("YYYY-MM-DD")
  }

  showPopupKeys: any = {
    showPreference: false,
    isProfessional: false,
    isRippleLoad: false
  }
  feeSettings1: ColumnData2[] = [
    { primaryKey: 'order_id', header: 'Order ID', priority: 1, allowSortingFlag: true },
    { primaryKey: 'title', header: 'Product Name', priority: 2, allowSortingFlag: true },
    { primaryKey: 'name', header: 'Student Name', priority: 3, allowSortingFlag: true },
    { primaryKey: 'phone', header: 'Phone No', priority: 4, allowSortingFlag: true },
    { primaryKey: 'publish_date', header: 'Purchase Date', priority: 5, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' },
    { primaryKey: 'price', header: 'Price', priority: 6, allowSortingFlag: true },
    {
      primaryKey: 'status', header: 'Status', priority: 7, allowSortingFlag: true, dataType: 'array',
      arrayValue: { '10': 'Ready', '20': 'Ready To Publish', '30': 'Published', '40': 'Unpublished', '50': 'Closed' }
    }
  ];

  tableSetting: any = {//inventory.item
    tableDetails: { title: 'Sales Report', key: 'products.salesReports', showTitle: false },
    search: { title: 'Search', showSearch: false },
    keys: this.displayKeys,
    selectAll: { showSelectAll: false, option: 'single', title: 'Sales report', checked: true, key: 'title' },
    defaultSort: { primaryKey: 'publish_date', sortingType: 'asc', header: 'Purchase Date', priority: 4, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' },
    actionSetting:
    {
      showActionButton: false
    },
    displayMessage: "Data Not Found"
  };

  searchText = "";
  searchflag: boolean = false;
  tempSalesData: any[] = [];

  constructor(private auth: AuthenticatorService,
    private _tablePreferencesService: TablePreferencesService,
    private pdf: ExportToPdfService,
    private ref: ChangeDetectorRef,
    private _msgService: MessageShowService,
    private _http: HttpService,
    private excelService: ExcelService,
    private http: ProductService,) { }

  ngOnInit() {

    this.tableSetting.keys = this.feeSettings1;
    if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
      this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);

      this.tableSetting.keys = this.displayKeys;
      if (this.displayKeys.length == 0) {
        this.setDefaultValues();
      }
    }
    else {
      this.setDefaultValues();
    }
    console.log(this.tableSetting);
    this.fectchTableDataByPage(0);
    this.getProductDetails();
  }

  optionSelected($event) {
    console.log($event)
  }

  /* Fetch table data by page index */
  fectchTableDataByPage(index) {
    let object = {
      "page_no": 1,
      "no_of_records": 100
    }

    this.auth.showLoader();
    this.http.getMethod('product/get?module=SALES_REPORT', null).subscribe(
      (resp: any) => {
        this.auth.hideLoader();
        if (resp.validate) {
          this.productLists = resp.result;
        }
        else {
          this._msgService.showErrorMessage('error', "something went wrong, try again", '');
        }
      },
      (err) => {
        this.auth.hideLoader();
        this._msgService.showErrorMessage('error', "something went wrong, try again", '');
      });

  }

  /* Fetch table data by page index */
  getProductDetails() {
    let object = {
      "between": {
        "from": moment(this.filterDataKeys.from_date).format("YYYY-MM-DD"),
        "to": moment(this.filterDataKeys.to_date).format("YYYY-MM-DD")
      },

      "in": [
        {
          "column": "productIds",
          "values": this.slotIdArr
        }
      ]
    }

    this.auth.showLoader();
    this.http.postMethod('order/sales-report', object).then(
      (resp: any) => {
        this.auth.hideLoader();
        let response = resp['body'];
        console.log(response);
        if (response.validate) {
          this.salesDataSource = [];
          let data = response.result;
          data && data.forEach((object) => {
            let saleData = {
              "order_id": object.order_id,
              "title": object.product.title,
              "name": object.name,
              "phone": object.phone,
              "price": object.price + " " + object.product.country_details.currency_code,
              "publish_date": object.purchase_date,
              "status": object.product.status,
            }
            this.salesDataSource.push(saleData);
          });
          this.tempSalesData = this.salesDataSource;
        }
        else {
          this._msgService.showErrorMessage('error', "something went wrong, try again", '');
        }
      },
      (err) => {
        this.auth.hideLoader();
        this._msgService.showErrorMessage('error', "something went wrong, try again", '');
      });

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

  /* =================================================================================================== */
  /* =================================================================================================== */
  updateSlotSelected(data) {
    /* slot checked */
    if (data.isChecked) {
      this.slotIdArr.push(data.entity_id);
      this.selectedSlots.push(data.title);
      if (this.selectedSlots.length != 0) {
        document.getElementById('slotwrapper').classList.add('has-value');
      }
      else {
        document.getElementById('slotwrapper').classList.remove('has-value');
      }
      this.selectedSlotsID = this.slotIdArr.join(',')
      this.selectedSlotsString = this.selectedSlots.join(',');
    }
    /* slot unchecked */
    else {
      if (this.selectedSlots.length < 0) {
        document.getElementById('slotwrapper').classList.add('has-value');
      }
      else if (this.selectedSlots.length == 0) {
        document.getElementById('slotwrapper').classList.remove('has-value');
      }
      else if (this.selectedSlots.length == 1) {
        document.getElementById('slotwrapper').classList.remove('has-value');
      }
      var index = this.selectedSlots.indexOf(data.title);
      if (index > -1) {
        this.selectedSlots.splice(index, 1);
      }
      this.selectedSlotsString = this.selectedSlots.join(',');
      var index2 = this.slotIdArr.indexOf(data.entity_id);
      if (index2 > -1) {
        this.slotIdArr.splice(index, 1);
      }
      this.selectedSlotsID = this.slotIdArr.join(',');
    }

  }


  setDefaultValues() {
    this.tableSetting.keys = [
      { primaryKey: 'order_id', header: 'Order ID', priority: 1, allowSortingFlag: true },
      { primaryKey: 'title', header: 'Product Name', priority: 2, allowSortingFlag: true },
      { primaryKey: 'name', header: 'Student Name', priority: 3, allowSortingFlag: true },
      { primaryKey: 'phone', header: 'Phone No', priority: 4, allowSortingFlag: true },
      { primaryKey: 'publish_date', header: 'Purchase Date', priority: 5, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' }
    ];
    this.displayKeys = this.tableSetting.keys;
    this._tablePreferencesService.setTablePreferences(this.tableSetting.tableDetails.key, this.displayKeys);
  }

  getColumns() {
    let arr2 = [];
    let arr3 = [];
    this.tableSetting.keys.map((ele) => {
      arr2.push(ele.header);
    })
    arr3.push(arr2);
    return arr3;
  }

  getRows() {
    let obj = {}
    let arr = [];
    this.tableSetting.keys.map((ele, index) => {
      obj[ele.primaryKey] = index
    })
    this.salesDataSource.map(
      (ele) => {
        let json2 = []
        for (let i in obj) {
          json2.push(ele[i])
        }
        arr.push(json2);
      }
    )
    return arr;
  }

  exportToPdf() {
    let rows = this.getColumns();
    let columns = this.getRows();
    this.pdf.exportToPdf(rows, columns, 'All_dues_Report');
  }

  fetchSalesReportDetails() {
    console.log('sales Details');
    this.getProductDetails();
  }

  openPreferences($event) {
    this.showPopupKeys.showPreference = !this.showPopupKeys.showPreference;
  }


  closePopup(e) {
    this.openPreferences(false);
    if (e) {
      if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
        this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);
        this.tableSetting.keys = this.displayKeys;
        if (e.callNotify) {
          this.child.notifyMe(this.tableSetting);
        }
        this.ref.markForCheck();
        this.ref.detectChanges();
      }
    }
    console.log(this.displayKeys);
  }

  // exportToExcel() {
  //   let exportedArray: any[] = [];
  //   this.salesDataSource.map((data: any) => {
  //     let obj = {};
  //     obj["Order ID"] = data.order_id;
  //     obj["Product Name"] = data.title;
  //     obj["Student Name"] = data.name;
  //     obj["Phone No"] = data.phone;
  //     obj["Purchase Date"] = moment(data.publish_date).format("DD MMM YYYY");
  //     exportedArray.push(obj);
  //   })
  //   this._excelService.exportAsExcelFile(
  //     exportedArray,
  //     'Sales Report'
  //   )
  // }


  /**
  * export as excel 
  * Added By Ashwini Gupta
  */
  exportToExcel() {
    let arr = []
    this.salesDataSource.map(
      (ele: any) => {
        let json = {}
        this.tableSetting.keys.map((keys) => {
          json[keys.header] = ele[keys.primaryKey]
        })
        arr.push(json);

      }

    )
    //Adding below line below in response value of status comes as 10,20,30,40,50 and which is not user friendly. User should able to see exact means of that code.
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i].Status) {
        case 10: arr[i].Status = "Ready";
          break;
        case 20: arr[i].Status = "Ready To Publish";
          break;
        case 30: arr[i].Status = "Published";
          break;
        case 40: arr[i].Status = "Unpublished";
          break;
        case 50: arr[i].Status = "Closed";
          break;
      }
    }
    this.excelService.exportAsExcelFile(
      arr,
      'Sales Report'
    )
  }

  // End

  searchDatabase() {
    this.salesDataSource = this.tempSalesData;
    if (this.searchText != "" && this.searchText != null) {
      let searchData: any;
      searchData = this.salesDataSource.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
      );
      this.salesDataSource = searchData;
      this.searchflag = true;

    }
    else {
      this.salesDataSource = this.tempSalesData;
      this.searchflag = false;
    }
  }
}
