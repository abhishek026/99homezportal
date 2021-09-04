
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthenticatorService } from "../../authenticator.service";

@Injectable()
export class GetFeeService {

    baseUrl: string = '';
    Authorization: any;
    headers;
    institute_id;


    constructor(private http: HttpClient, private auth: AuthenticatorService) {
        this.auth.currentAuthKey.subscribe(key => {
            this.Authorization = key;
            this.headers = new HttpHeaders({ "Content-Type": "application/json", "Authorization": this.Authorization });
        })
        this.auth.currentInstituteId.subscribe(id => {
            this.institute_id = id;
        });

        this.baseUrl = this.auth.getBaseUrl();
    }


    fetchLastMonthFee(obj): Observable<any> {
        let url = this.baseUrl + "/api/v1/studentWise/fee/students/highChartsRender";
        return this.http.post(url, obj, { headers: this.headers }).pipe(map(
            res => {
                return res;
            },
            err => {
                return err;
            }
        ))
    }

    getPaymentHistory(id): Observable<any> {
        let url = this.baseUrl + "/api/v1/studentWise/fee/feesReport/pastHistory/" + this.institute_id + "/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ));
    }

    getBatchDetails(obj): Observable<any> {
        let url = this.baseUrl + '/api/v1/batches/fetchCombinedBatchData/' + this.institute_id + '?standard_id=' + obj.standard_id + '&subject_id=' + obj.subject_id + '&assigned=N';
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getCourseData(id): Observable<any> {
        let url = this.baseUrl + '/api/v1/courseMaster/fetch/' + this.institute_id + '/' + id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getMasterCourses(): Observable<any> {
        let url = this.baseUrl + '/api/v1/courseMaster/fetch/' + this.institute_id + '/all'
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getFeeReportData(obj): Observable<any> {
        let url = this.baseUrl + '/api/v1/studentWise/fee/students/' + this.institute_id
        return this.http.post(url, obj, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getinstallmentData(): Observable<any> {
        let url = this.baseUrl + '/api/v1/studentWise/fee/fetchInstallments/' + this.institute_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getFeeReceipts(id): Observable<any> {
        let url = this.baseUrl + "/api/v1/studentWise/fee/feesReport/feeReceipts/" + this.institute_id + "/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getReceiptById(obj): Observable<any> {
        let url = this.baseUrl + "/api/v1/studentWise/fee/" + obj.student_id + "/feeReceipt/" + obj.disp_id + "/download?fin_yr=" + obj.fin_yr;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getFutureDues(id): Observable<any> {
        let url = this.baseUrl + "/api/v1/studentWise/fee/feesReport/futureDues/" + this.institute_id + "/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => { return res; },
            err => { return err; }
        ))
    }

    getAcademicYear() {
        let url = this.baseUrl + "/api/v1/academicYear/all/" + this.institute_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            (data: any) => {
                return data;
            },
            (error: any) => {
                return error;
            }
        ))
    }

    getEmail(obj) {
        let url = this.baseUrl + "/api/v1/studentWise/fee/" + obj.student_id + "/feeReceipt/" + obj.disp_id + "/download?emailSent=Y"
        return this.http.get(url, { headers: this.headers }).pipe(map(
            (data: any) => {
                return data;
            },
            (error: any) => {
                return error;
            }
        ))
    }


    getFeeWidgetDataByDateRange(obj): Observable<any> {
        let url = this.baseUrl +"/api/v1/studentWise/fee/feesummaryreport/" +this.institute_id;
        return this.http.post(url, obj, { headers: this.headers }).pipe(map(
            res => { return res },
            err => { return err }
        ));
    }

}