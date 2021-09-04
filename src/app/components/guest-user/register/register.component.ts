
import {timer as observableTimer} from 'rxjs';

import {take, map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { Observable } from '../../../../../node_modules/rxjs';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { LoginService } from '../../../services/login-services/login.service';
import { MessageShowService } from '../../../services/message-show.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /* Variable Declaration */

  loginDataForm: any = {
    alternate_email_id: "",
    password: "",
    confirmPassword: "",
    mobile_no: "",
    institution_id: "",
    name: ""
  };
  otpVerificationInfo: any = {
    otp_code: ""
  };
  instituteListArr: any = [];
  messages: any;
  counter: number = 30;
  countDown: any;
  isView = 'register';

  constructor(
    private login: LoginService,
    private router: Router,
    private msgService: MessageShowService,
    private auth: AuthenticatorService
  ) {
    this.messages = msgService.getMessages();
  }

  ngOnInit() {

  }

  gotoLogin() {
    this.router.navigate(['/authPage']);
  }

  alternateLoginOTPVerification() {

    if (this.otpVerificationInfo.otp_code.trim() == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please enter OTP ");
      return;

    }
    this.otpVerificationInfo.otp_validate_mode = 2;
    this.auth.showLoader();
    this.login.validateOTPCode(this.otpVerificationInfo).subscribe(
      (res: any) => {
        if (res) {
          // institute
          this.auth.hideLoader();
          switch (res.otp_status) {
            case 1: {
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Your OTP expired ");
              break;
            }
            case 2: {
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Your OTP is wrong ");
              break;
            }
            default: {
              this.gotoLogin();
              this.msgService.showErrorMessage(this.msgService.toastTypes.success, "", "Your account verified successfully");
              break;
            }
          }

        }
      },
      err => {
        console.log(err);
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    );
  }


  registerGuestUser() {

    let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/
    this.loginDataForm.institution_id = sessionStorage.getItem('institution_id');
    if (this.loginDataForm.alternate_email_id.trim() != ""
      && this.loginDataForm.password.trim() != ""
      && this.loginDataForm.confirmPassword.trim() != ""
      && this.loginDataForm.mobile_no.trim() != ""
      && this.loginDataForm.name.trim() != ""
    ) {
      if (this.loginDataForm.name.trim() != "") {

        if (email.test(this.loginDataForm.alternate_email_id)) {

          if (this.loginDataForm.mobile_no.length == 10) {

            if (this.loginDataForm.password.length >= 5 && this.loginDataForm.confirmPassword.length >= 5) {

              if (this.loginDataForm.password == this.loginDataForm.confirmPassword) {
                this.auth.showLoader();
                this.login.guestUserRegistration(this.loginDataForm).subscribe(
                  (res: any) => {
                    this.otpVerificationInfo = res;
                    this.auth.hideLoader();
                    if (res.institutesList != null) {
                      // institute
                      this.instituteListArr = res.institutesList;
                      this.isView = 'institute';
                    }
                    else {
                      this.isView = 'validateOTP';
                      this.counter = 30;
                      this.otpVerificationInfo.otp_code = "";
                      this.countDown = observableTimer(0, 1000).pipe(
                        take(this.counter),
                        map(() => --this.counter),);
                    }
                  },
                  err => {
                    console.log(err);
                    this.isView = 'register';
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                  }
                );

              }
              else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Password should be same  ");
              }
            }
            else {
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Password must be atleast 5 characters long");
            }
          } else {
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please enter 10 digit mobile number");
          }
        } else {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please enter valid email id");
        }
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please enter name");
      }
    }
    else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please fill the details");
    }

  }

  alternateLoginOTPRegenerate() {
    this.auth.showLoader();
    this.login.regenerateOTP(this.otpVerificationInfo).subscribe(
      (res: any) => {
        if (res) {
          // institute
          this.auth.hideLoader();
          this.otpVerificationInfo = res;
          this.otpVerificationInfo.otp_code = "";
          this.isView = 'validateOTP';
          this.counter = 30;
          this.countDown = observableTimer(0, 1000).pipe(
            take(this.counter),
            map(() => --this.counter),);
        }
      },
      err => {
        console.log(err);
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    );
  }

  alternateLoginMultiInstituteData(institution_id) {
    this.auth.showLoader();
    if (this.loginDataForm.institution_id == institution_id) {
      this.loginDataForm.is_main_branch = "Y"
    }
    else {
      this.loginDataForm.is_main_branch = "N"
    }
    this.loginDataForm.institution_id = institution_id;
    this.login.guestUserRegistration(this.loginDataForm).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res) {
          // institute
          this.otpVerificationInfo = res;
          this.otpVerificationInfo.otp_code = "";
          this.isView = 'validateOTP';
          this.counter = 30;
          this.countDown = observableTimer(0, 1000).pipe(
            take(this.counter),
            map(() => --this.counter),);
        }
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    );
  }
}