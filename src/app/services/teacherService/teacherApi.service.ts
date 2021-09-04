
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AuthenticatorService } from "../authenticator.service";

@Injectable()

export class TeacherAPIService {

    baseUrl: string = '';
    Authorization: any;
    headers;
    institute_id;

    constructor(
        private http: HttpClient,
        private auth: AuthenticatorService,
    ) {
        this.auth.currentAuthKey.subscribe(key => {
            this.Authorization = key;
            this.headers = new HttpHeaders(
                { "Content-Type": "application/json", "Authorization": this.Authorization });
        })
        this.auth.currentInstituteId.subscribe(id => {
            this.institute_id = id;
        });
        this.baseUrl = this.auth.getBaseUrl();

    }

    // List Section Of Teacher

    getAllTeacherList() {
        let url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }


    deleteTeacher(id){
        let url = this.baseUrl + "/api/v1/teachers/" + id;
        return this.http.delete(url , {headers:this.headers}).pipe(map(
            res => {return res;},
            err => {return err}
        ))
    }

    // Add Section Of Teacher

    addNewTeacherDetails(data) {
        let url = this.baseUrl + '/api/v1/teachers';
        data.institution_id = this.institute_id;
        return this.http.post(url, data, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    // Edit Section Of Teacher

    getSelectedTeacherInfo(data) {
        let url = this.baseUrl + '/api/v1/teachers/' + data;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    saveEditTeacherInformation(teacher_id, data) {
        let url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
        data.institution_id = this.institute_id;
        return this.http.put(url, data, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }


    downloadDocument(teacher_id) {
        let url = this.baseUrl + '/api/v1/teachers/getIDCard/' + teacher_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    // View Section Api

    getViewInfoOfTeacher(teacher_id) {
        let url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getTeacherViewBatchesInfo() {
        let url = this.baseUrl + '/api/v1/batches/all/' + this.institute_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    customizedTeacherSearchOnDashBoardView(data, teacher_id) {
        let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/dashboard', data, { headers: this.headers });
        return url1.pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    customizedTeacherSearchOnGuestBatchView(data, teacher_id) {
        let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/guestBatches/classes', data, { headers: this.headers });
        return url1.pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    viewBatchDetails(data, teacher_id) {
        let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/batch/classes', data, { headers: this.headers });
        return url1.pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }


}