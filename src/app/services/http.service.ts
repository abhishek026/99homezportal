
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticatorService } from './authenticator.service';


@Injectable()
export class HttpService {

  public routeList = [];
  baseUrl: string = '';
  Authorization: any;
  headers: any;
  institute_id: any;
  private dataSource = new BehaviorSubject<String>(null);
  data = this.dataSource.asObservable();

  constructor(
    private http: HttpClient,
    private auth: AuthenticatorService,
  ) {
    this.auth.currentAuthKey.subscribe(key => {
      this.Authorization = key;
      this.headers = new HttpHeaders({ "Content-Type": "application/json", "Authorization": this.Authorization });
    })
    this.auth.currentInstituteId.subscribe(id => {
      this.institute_id = id;
    });
    this.baseUrl = this.auth.getBaseUrl();

  }

  updatedDataSelection(type: String) {
    this.dataSource.next(type);
  }

  getData(objecturl) {
    let url = this.baseUrl + objecturl;
    return this.http.get(url, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  postData(objecturl, obj) {
    let url = this.baseUrl + objecturl;
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  putData(objecturl, obj) {
    let url = this.baseUrl + objecturl;
    return this.http.put(url, obj, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  deleteDataById(deleteurl) {
    let url = this.baseUrl + deleteurl;
    return this.http.delete(url, { headers: this.headers }).pipe(map(
      (data: any) => {
        return data;
      },
      (error: any) => {
        return error;
      }
    ))
  }

  deleteData(objecturl, obj) {
    let url = this.baseUrl + objecturl;
    let object = {
      headers: this.headers,
      body: obj
    }
    return this.http.delete(url, object).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  downloadRecording(objecturl, file_type) {
    let url = this.baseUrl + objecturl;
    let headers = new HttpHeaders({ "Content-Type": file_type, "Authorization": this.Authorization });
    return this.http.get(url, { headers: headers, "responseType": 'blob' }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  downloadItem(objecturl, file_type) {
    let url = this.baseUrl + objecturl;
    let headers = new HttpHeaders({ "Content-Type": file_type, "Authorization": this.Authorization });
    return this.http.get(url, { headers: headers, "responseType": 'blob' }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

  postARPData(objecturl, obj) {
    let url = 'https://arp3-api.proctur.com/v1/' + objecturl;
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    ))
  }

}
