
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticatorService } from "../authenticator.service";
import * as moment from 'moment';


@Injectable()
export class ExamGradeServiceService {

  baseUrl: string = '';
  Authorization: any;
  headers;
  institute_id;

  constructor(private http: HttpClient,
    private auth: AuthenticatorService, ) {
    this.auth.currentAuthKey.subscribe(key => {
      this.Authorization = key;
      this.headers = new HttpHeaders({ "Content-Type": "application/json", "Authorization": this.Authorization });
    });
    this.auth.currentInstituteId.subscribe(id => {
      this.institute_id = id;
    });
    this.baseUrl = this.auth.getBaseUrl();
  }

  fetchAllData() {
    let url = this.baseUrl + "/api/v1/grade_manager/getDetail/" + this.institute_id;
    return this.http.get(url, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      error => {
        return error;
      }
    ))
  }

  addData(obj) {
    let url = this.baseUrl + "/api/v1/grade_manager/create";
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      error => {
        return error;
      }
    ))
  }

  saveEdited(obj) {
    let url = this.baseUrl + "/api/v1/grade_manager/update";
    return this.http.put(url, obj, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      error => {
        return error;
      }
    ))
  }

  deleteRow(obj) {
    let url = this.baseUrl + "/api/v1/grade_manager/delete/" + this.institute_id + "/" + obj.grade_id;
    return this.http.delete(url, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      error => {
        return error;
      }
    ))
  }
}
