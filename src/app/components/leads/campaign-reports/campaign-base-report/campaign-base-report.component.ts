import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { getSMSService } from '../../../../services/report-services/get-sms.service';
import { DataDisplayTableComponent } from '../../../shared/data-display-table/data-display-table.component';

@Component({
  selector: 'app-campaign-base-report',
  templateUrl: './campaign-base-report.component.html',
  styleUrls: ['./campaign-base-report.component.scss']
})
export class CampaignBaseReportComponent implements OnInit {

  @ViewChild('child',{static: false}) private child: DataDisplayTableComponent;
  projectSettings: any[] = [
    { primaryKey: 'mobile', header: 'Mobile', priority: 1, allowSortingFlag: true },
    { primaryKey: 'name', header: 'Name', priority: 2, allowSortingFlag: true },
    { primaryKey: 'Email', header: 'email', priority: 3, allowSortingFlag: true },
    { primaryKey: 'address', header: 'Address', priority: 4, allowSortingFlag: true },
    { primaryKey: 'created_date', header: 'Send Date', priority: 5, allowSortingFlag: true },
    { primaryKey: 'sms_status', header: 'Status', priority: 6, allowSortingFlag: true },
    { primaryKey: 'sms_failure_reason', header: 'Failure Reason', priority: 7, allowSortingFlag: true }
  ];
  msgObject:any;
  smsSource: any[] = [];
  searchData = [];
  searchText = "";
  successCount:number =0;
  failureCount:number =0;
  totalRecords: number = 0;
  searchflag: boolean = false;
  dataStatus: boolean = true;
  tableSetting: any = {//inventory.item
    tableDetails: { title: 'Campaign Base SMS Report', key: 'reports.fee.campaignBaseReport', showTitle: false },
    search: { title: 'Search', showSearch: true },
    keys: this.projectSettings,
    selectAll: { showSelectAll: false,option:'single', title: 'Send Due SMS', checked: true, key: 'name' },
    actionSetting:
    {
      showActionButton: false,
    },
    displayMessage: "Campaign messages does not exist"
  };

  constructor(
    private _msgService: MessageShowService,
    private getSms: getSMSService,
    private auth:AuthenticatorService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        let objectData = (params['data']);
        this.msgObject = JSON.parse(objectData) ;
        console.log(this.msgObject);
      });
    this.getCamapignViewMessages(this.route.snapshot.paramMap.get('id'))
  }


    searchDatabase() {
      if (this.searchText != "" && this.searchText != null) {
        let searchData: any;
        searchData = this.smsSource.filter(item =>
          Object.keys(item).some(
            k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
        );
        this.smsSource = searchData;
        this.searchflag = true;
      }
      else {
        this.getCamapignViewMessages(this.msgObject.campaign_list_message_id);
      }
    }

    getCamapignViewMessages(id){
      this.successCount =0;
      this.failureCount =0;
      this.auth.showLoader();
      this.getSms.getCamapignView(id).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          this.smsSource = res;
          this.smsSource.forEach(element => {
             if(element.sms_status=='Success'){
              this.successCount++;
             }
             else{
              this.failureCount++;
             }
          });
        },
        err => {
          this.auth.hideLoader();
         this.tableSetting.displayMessage= err.message;
        }
      )
    }

}
