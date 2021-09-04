
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
import { AuthenticatorService } from '../authenticator.service';


@Injectable()
export class LoginService {

  urlLogin: string;
  headers: any;
  forgotPasswordURL: string;
  baseUrl: string = '';
  Authorization: any = '';
  public instituteList: string[] = ['100057', '100058', '100123', '100180', '100126', '100127', '100174', '100118', '100321', '100423', '100495', '100496', '100497', '100498', '100202', '100203', '100204', '100391', '100213', '100220', '100221', '100392', '100410', '100444', '100231', '100302', '100380', '100438', '100568', '100580'];

  /* 100533 100423 for divya video purpose */

  /* institute name and username subscriber */
  private instituteNameSource = new BehaviorSubject<string>('');
  private userNameSource = new BehaviorSubject<string>('');
  private overlayMenu = new BehaviorSubject<boolean>(false);
  private sideNavSource = new BehaviorSubject<string>('');
  private permissionSource = new BehaviorSubject<any>('');
  private userTypeSource = new BehaviorSubject<any>('');
  private poweredBy = new BehaviorSubject<any>('');

  currentInstitute = this.instituteNameSource.asObservable();
  currentSidenav = this.sideNavSource.asObservable();
  currentUsername = this.userNameSource.asObservable();
  currentMenuState = this.overlayMenu.asObservable();
  currentPermissions = this.permissionSource.asObservable();
  currentUserType = this.userTypeSource.asObservable();
  poweredByStatus = this.poweredBy.asObservable();

  changePermissions(data: any) {
    this.permissionSource.next(data);
  }

  changeUserType(id: string | number) {
    this.userTypeSource.next(id);
  }

  changeInstituteStatus(institute: string) {
    this.instituteNameSource.next(institute);
  }

  changeSidenavStatus(sidenav: string) {
    this.sideNavSource.next(sidenav);
  }

  changeNameStatus(name: string) {
    this.userNameSource.next(name);
  }

  changeMenuStatus(menu: boolean) {
    this.overlayMenu.next(menu);
  }

  constructor(private http: HttpClient, private auth: AuthenticatorService) {
    this.baseUrl = this.auth.getBaseUrl();
    this.urlLogin = this.baseUrl + "/api/v1/alternateLogin";
    this.auth.currentAuthKey.subscribe(key => {
      this.Authorization = key;
      this.headers = new HttpHeaders(
        { "Content-Type": "application/json", "Authorization": this.Authorization });
    })
  }


  postLoginDetails(data): any {
    let header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.urlLogin, data, { headers: header }).pipe(map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ));
  }

  guestUserRegistration(data){
    const URL = this.baseUrl + "/api/v1/alternateLogin/register";
    let header =  new HttpHeaders({ "Content-Type": "application/json"});
    return this.http.post(URL, data, { headers: header }).pipe(map(res => {
      return res;
    }))
  }

  validateOTPCode(data) {
    const URL  = this.baseUrl + "/api/v1/alternateLogin/register/validateOTP";
    let header =  new HttpHeaders({ "Content-Type": "application/json"});
    return this.http.post(URL , data, { headers: header }).pipe(map(res => {
      return res;
    }))
  }

  regenerateOTP(data) {
    const URL = this.baseUrl + "/api/v1/authenticate/regenerateOTP";
    let header =  new HttpHeaders({ "Content-Type": "application/json"});
    return this.http.post(URL, data, { headers: header }).pipe(map(res => {
      return res;
    }))
  }

  forgotPassowrdServiceMethod(data) {
    this.forgotPasswordURL = this.baseUrl + "/api/v1/alternateLogin/forgotPswd";
    let header =  new HttpHeaders({ "Content-Type": "application/json"});
    return this.http.post(this.forgotPasswordURL, data, { headers: header }).pipe(map(
      res => {
        return res;
      }))
  }

  logoutUser() {
    let url = this.baseUrl + "/api/v1/alternateLogin/logout?deviceId=" + sessionStorage.getItem('deviceId');
    let header =  new HttpHeaders({"Authorization": this.Authorization});
    return this.http.get(url, { headers: header }).pipe(map(
      res => {
        // this.auth.clearStoredData();
        // this.auth.changeAuthenticationKey(null);
        // this.auth.changeInstituteId(null);
        // this.changeSidenavStatus('unauthorized');
        // sessionStorage.clear();
        // localStorage.clear();
        return res;
       },
      err => {
      return err;
     }
    ))
    // remove user from local storage to log user out

    // return true;



  }

  getAllInstituteId() {
    return this.instituteList;
  }

  changePasswordService(obj) {
    let url = this.baseUrl + "/api/v1/changePwd";
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(
      res => { return res; },
      err => { return err; }
    ))
  }

  storeInstituteInfoToSession() {
    let url = this.baseUrl + "/api/v1/institutes/" + sessionStorage.getItem('institute_id');
    return this.http.get(url, { headers: this.headers }).pipe(map(
      res => {
        let result: any = res;
        this.poweredBy.next(result.show_powered_by_proctur);
        sessionStorage.setItem('custom_text_for_power_by_proctur', result.custom_text_for_power_by_proctur);
        return res;
      },
      err => { return err; }
    ));
  }

  getLogoAndFavcon(str) {
    let url = this.baseUrl + "/api/v1/institutes/getLogoAndFavIcon?virtualHostUrl=" + str;
    return this.http.get(url).pipe(map(
      res => { return res; },
      err => { return err; }
    ))
  }

  getGuestUserCourses(institudeId) {
    let url = this.baseUrl + "/api/v1/institute/courseMapping/" + institudeId;
    return this.http.get(url, { headers: this.headers }).pipe(map(
      res => { return res; },
      err => { return err; }
    ))
  }

  updateCourseforGuestUser(obj) {
    let url = this.baseUrl + "/api/v1/authenticate/openAppUser/updateProfile";
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(
      res => { return res; },
      err => { return err; }
    ))
  }

  // creted by: Nalini Walunj/
  // below function is written to get country details based on institute id.
  getInstituteCountryDetails(institute_id){
    let url = this.baseUrl + `/api/v1/institutes/country/${institute_id}`;
    return this.http.get(url, { headers: this.headers }).pipe(map(
      res => {
        console.log(res);
        return res;
      },
      err => {
        return err;
      }
    ));
  }
}
