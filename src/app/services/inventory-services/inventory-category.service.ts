
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';
import { AddCategory } from '../../model/inventory-category';
import {  HttpResponse, HttpRequest, HttpXhrBackend } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InventoryCategoryService {

  baseUrl = '';
  Authorization: any;
  institute_id:string;
  headers;

  constructor(
    private http: HttpClient,
    private auth: AuthenticatorService
  ) {
    this.auth.currentAuthKey.subscribe( key => {
      this.Authorization = key;
      this.headers = new HttpHeaders(
        { "Content-Type": "application/json", "Authorization": this.Authorization });
    }) 
    this.auth.currentInstituteId.subscribe( id => {
      this.institute_id = id;
    });
    this.baseUrl = this.auth.getBaseUrl();

  } 

  // Getting all category list from server
  getCategoryList() {
    let institution_id = parseInt(this.institute_id);
    let url = this.baseUrl + '/api/v1/inventory/category/all/' + institution_id;
    return this.http.get(url , { headers: this.headers }).pipe(map(
      success => {
        return success;
      },
      err => {
        return err;
      }
    ))
  }

  // Add new category to the category list
  setNewCategory(data: AddCategory) {
    data.institution_id = parseInt(this.institute_id);
    let url = this.baseUrl + '/api/v1/inventory/category';
    return this.http.post(url, data, { headers: this.headers }).pipe(map(
      success => {
        return success;
      },
      err => {
        return err;
      }
    ));
  }

  // to update the existing row
  updateExisting(data: any){
    let url = this.baseUrl + '/api/v1/inventory/category';
    return this.http.put(url, data, { headers: this.headers }).pipe(map(
      success => {
        return success;
      },
      err => {
        return err;
      }
    ));
  }

}
