import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { monitoringService } from '../services/monitoring.service'
import * as Highcharts from 'highcharts';
import { CommonServiceFactory } from './../../../../services/common-service';

@Component({
  selector: 'fee-line',
  templateUrl: './fee-line.component.html',
  styleUrls: ['./fee-line.component.scss']
})
export class FeeLineComponent {

  datelineRange: any[] = [];
  rangelineSelected: any = '2';
  rangeType: string = 'This Month'

  constructor(private getService: monitoringService,
  private _commService:CommonServiceFactory) {
    this.datelineRange[0] = moment(new Date()).startOf('month').format('YYYY-MM-DD');
    this.datelineRange[1] = moment(new Date()).endOf('month').format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.fetchFeeStackMonitor();
  }

  datelineRangeUpdated(e) {
    /* last 7 days */
    if (e == 1) {
      this.datelineRange[1] = moment(new Date()).format('YYYY-MM-DD');
      this.datelineRange[0] = moment(new Date()).subtract(7, 'days').format('YYYY-MM-DD');
      this.rangeType = "Last 7 days";
    }
    /* this month */
    else if (e == 2) {
      this.datelineRange[0] = moment(new Date()).startOf('month').format('YYYY-MM-DD');
      this.datelineRange[1] = moment(new Date()).endOf('month').format('YYYY-MM-DD');
      this.rangeType = "This Month";
    }
    /* last 30 days */
    else if (e == 3) {
      this.datelineRange[1] = moment(new Date()).format('YYYY-MM-DD');
      this.datelineRange[0] = moment(new Date()).subtract(30, 'days').format('YYYY-MM-DD');
      this.rangeType = "Last 30 Days";
    }
    /* last month */
    else if (e == 4) {
      this.datelineRange[0] = moment(new Date()).startOf('month').subtract(1, 'months').format('YYYY-MM-DD');
      this.datelineRange[1] = moment(new Date()).startOf('month').subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
      this.rangeType = "Last Month";
    }
    /* last 3 month */
    else if (e == 5) {
      this.datelineRange[0] = moment(new Date()).startOf('month').subtract(3, 'months').format('YYYY-MM-DD');
      this.datelineRange[1] = moment(new Date()).format('YYYY-MM-DD');
      this.rangeType = "Last 3 Months";
    }

    this.fetchFeeStackMonitor();

  }

  fetchFeeStackMonitor() {

    let obj = {
      from_date: moment(this.datelineRange[0]).format('YYYY-MM-DD'),
      high_charts_name: "",
      institute_id: sessionStorage.getItem('institute_id'),
      to_date: moment(this.datelineRange[1]).format('YYYY-MM-DD')
    }

    this.getService.fetchFeeMonitor(obj).subscribe(
      res => {
        this.generateChartData(res);
      },
      err => {
      }
    )
  }

  generateChartData(res: any[]) {
    let dateMap: any[] = [];
    let feeMap: any[] = [];

    res.map(e => {
      dateMap.push(e.paid_date);
      feeMap.push(e.total_fees);
    });

    this.createChart(dateMap, feeMap);
  }

  createChart(d: any[], f: any[]) {

    Highcharts.chart('lineContainer', {
      chart: {
        zoomType: 'x'
        //type: 'line'
      },
      title: {
        text: 'Fee Collection'
      },
      subtitle: {
        text: this.rangeType
      },
      xAxis: {
        categories: d
      },
      yAxis: {
        title: {
          text: 'Amount('+this._commService.currency_default_symbol+')'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>'+this._commService.currency_default_symbol+' {point.y} </b>'
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[1])]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        },
        line: {
          dataLabels: {
            enabled: true,
            format: this._commService.currency_default_symbol+'{y}'
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Dates',
        data: f
      }]
    });
  }

}