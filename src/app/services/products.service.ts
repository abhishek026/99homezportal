
import { map } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AuthenticatorService } from './authenticator.service';

/** created by laxmi */
@Injectable()
export class ProductService {


    baseUrl: any = '';
    subscription: any;

    header: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        // 'X-Platform': 'web',
        "Authorization": this.getAuthToken(),
        "x-proc-authorization": this.getAuthToken(),
        "x-prod-inst-id": sessionStorage.getItem('institute_id'),
        "x-prod-user-id": sessionStorage.getItem('userid')
    });

    constructor(
        private _http: HttpClient,
        private _auth: AuthenticatorService
    ) {
        this.baseUrl = this._auth.productBaseUrl + '/prod/';
    }

    searchMethod(method, url, body, params, plateform) {
        let fullUrl = this.baseUrl + url;
        let _httpRequest = new HttpRequest(method, fullUrl, body, {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                // 'X-Platform': 'web',
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-prod-inst-id": sessionStorage.getItem('institute_id'),
                "x-prod-user-id": sessionStorage.getItem('userid')
            }),
            params: params,
            responseType: 'json',
            reportProgress: true,
            withCredentials: false
        });
        return new Promise((resolve, reject) => {
            if (this.subscription) {
                //   resolve('');
                this.subscription.unsubscribe();
            }

            this.subscription = this._http.request(_httpRequest).subscribe(
                data => {
                    if (data['statusText'] == "OK" && data["body"]) {
                        resolve(data);
                    }
                },
                error => {
                    reject(error);
                });
        });
    }

    // for search method 
    getData(url, plateform = 'web') {
        return this._http.get(url, { headers: this.header }).pipe(map(
            data => {
                return data;
            },
            err => {
                return err;
            }
        ))
    }

    callMethods(method, url, body, params, plateform) {
        let fullUrl = this.baseUrl + url;
        let _httpRequest = new HttpRequest(method, fullUrl, body, {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                // 'X-Platform': 'web',
                "x-proc-authorization": this.getAuthToken(),
                "x-prod-inst-id": sessionStorage.getItem('institute_id'),
                "x-prod-user-id": sessionStorage.getItem('userid')
            }),
            params: params,
            responseType: 'json',
            reportProgress: true,
            withCredentials: false
        });
        return new Promise((resolve, reject) => {
            this._http.request(_httpRequest).subscribe(
                data => {
                    if (data['statusText'] == "OK" && data["body"]) {
                        resolve(data);
                    }
                },
                error => {
                    reject(error);
                });
        });
    }

    patchMethod(url, body, plateform = 'web') {
        return new Promise((resolve, reject) => {
            this.callMethods('PATCH', url, body, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    deleteMethod(url, plateform = 'web') {
        return new Promise((resolve, reject) => {
            this.callMethods('DELETE', url, null, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    postMethod(url, body, plateform = 'web') {
        return new Promise((resolve, reject) => {
            this.callMethods('POST', url, body, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    postMethod2(url, body, plateform = 'web') {
        return new Promise((resolve, reject) => {
            this.callMethods2('POST', url, body, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    callMethods2(method, url, body, params, plateform) {
        let fullUrl = this.baseUrl + url;
        let _httpRequest = new HttpRequest(method, fullUrl, body, {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                // 'X-Platform': 'web',
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-prod-inst-id": "100083",
                "x-prod-user-id": sessionStorage.getItem('userid')
            }),
            params: params,
            responseType: 'json',
            reportProgress: true,
            withCredentials: false
        });
        return new Promise((resolve, reject) => {
            this._http.request(_httpRequest).subscribe(
                data => {
                    if (data['statusText'] == "OK" && data["body"]) {
                        resolve(data);
                    }
                },
                error => {
                    reject(error);
                });
        });
    }
    getMethodWithoutParam(url, plateform) {
        return new Promise((resolve, reject) => {
            this.callMethods('GET', url, null, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    getMethod(url, params, plateform = 'web') {
        if (params) {
            url = url + '?';
            let keysArray = Object.keys(params);
            for (let i = 0; i < keysArray.length; i++) {
                url = url + keysArray[i] + '=' + params[keysArray[i]];
                if (i <= keysArray.length - 2) {
                    url = url + '&';
                }
            }
        }
        url = this.baseUrl + url;
        return this._http.get(url, {
            headers: {
                "Content-Type": "application/json",
                // 'X-Platform': 'web',
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-prod-inst-id": sessionStorage.getItem('institute_id'),
                "x-prod-user-id": sessionStorage.getItem('userid')
            }
        }).pipe(map(
            data => {
                return data;
            },
            err => {
                return err;
            }
        ))

    }

    getAuthToken() {
        let obj: any = {
            userid: sessionStorage.getItem('userid'),
            userType: sessionStorage.getItem('userType'),
            password: sessionStorage.getItem('password'),
            institution_id: sessionStorage.getItem('institute_id'),
        }

        if (obj != null && obj != undefined) {
            let Authorization = btoa(obj.userid + "|" + obj.userType + ":" + obj.password + ":" + obj.institution_id);
            let token = Authorization;
            if (token != null) {
                return token;
            }
        }
    }

    putMethod(url, body, plateform = 'web') {
        return new Promise((resolve, reject) => {
            this.callMethods('PUT', url, body, null, plateform)
                .then(
                    (data) => {
                        resolve(data);
                    },
                    (err) => {
                        reject(err);
                    }
                );
        });
    }

    getCertificateData(objecturl) {
        let url = this._auth.baseUrl + objecturl;
        return this._http.get(url, {
            headers: {
                "Content-Type": "application/json",
                // 'X-Platform': 'web',
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-proc-inst-id": sessionStorage.getItem('institute_id'),
                "x-prod-user-id": sessionStorage.getItem('userid')
            }
        }).pipe(map(
            data => {
                return data;
            },
            err => {
                return err;
            }
        ))

    }

    getUploadFileData(Objecturl) {
        let url = this._auth.baseUrl + Objecturl;
        return this._http.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-proc-inst-id": sessionStorage.getItem('institute_id'),
                "x-proc-user-id": sessionStorage.getItem('userid')
            }
        }).pipe(map(
            data => {
                return data;
            },
            err => {
                return err;
            }
        ))

    }

    deleteFile(Objecturl) {
        let url = this._auth.baseUrl + Objecturl;
        return this._http.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.getAuthToken(),
                "x-proc-authorization": this.getAuthToken(),
                "x-proc-inst-id": sessionStorage.getItem('institute_id'),
                "x-proc-user-id": sessionStorage.getItem('userid')
            }
        }).pipe(map(
            data => {
                return data;
            },
            err => {
                return err;
            }
        ))

    }

}
