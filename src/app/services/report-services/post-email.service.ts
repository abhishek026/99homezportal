import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatorService } from "../authenticator.service";


@Injectable()
export class postEmailService {


    baseUrl:string = '';
    institute_id: string;
    Authorization: string;
    headers: HttpHeaders;


    /* set default value for each url, header and autherization on service creation */
    constructor(private http: HttpClient, private auth: AuthenticatorService,) {
        this.auth.currentAuthKey.subscribe( key => {
            this.Authorization = key;
            this.headers = new HttpHeaders();
            this.headers.append("Content-Type", "application/json");
            this.headers.append("Authorization", this.Authorization);
          }) 
          this.auth.currentInstituteId.subscribe( id => {
            this.institute_id = id;
          });
        this.baseUrl = this.auth.getBaseUrl();

    }


}
