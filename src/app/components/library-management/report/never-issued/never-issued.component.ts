import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { ReportService } from '../../../../services/library/report/report.service';

@Component({
  selector: 'app-never-issued',
  templateUrl: './never-issued.component.html',
  styleUrls: ['./never-issued.component.scss']
})
export class NeverIssuedComponent implements OnInit {

  jsonFlag = {
    isProfessional: false,
  };
  neverIssuedBookReportList: any[] = [];
  lostbookrange: any[] = [];
  lostBookReportList: any[] = [];
  neverIssueCollectionRange: any[] = [];
  searchText: string;
  constructor(
    private reportService: ReportService,
    private auth:AuthenticatorService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.lostbookrange[0] = new Date(moment().date(1).format("YYYY-MM-DD"));
    this.lostbookrange[1] = new Date(moment().format("YYYY-MM-DD"));
    this.getNeverIssuedBookReport();
  }

  openCalendar(id) {
    document.getElementById(id).click();
  }
  
  getStartDate() {
    this.cd.markForCheck();
    let date = moment().date(1).format("YYYY-MM-DD");
    return this.neverIssueCollectionRange[0];
}

getEndDate() {
    this.cd.markForCheck();
    return this.neverIssueCollectionRange[1];
}

  getNeverIssuedBookReport(){

    this.auth.showLoader();
    this.reportService.getNeverIssuedBookReport().subscribe(
      response => {
        this.auth.hideLoader();
        let res: any;
        res = response
        this.neverIssuedBookReportList = res.response;
        console.log(this.neverIssuedBookReportList)
      },
      errorResponse => {
        this.auth.hideLoader();
      }
    )
  }


}
