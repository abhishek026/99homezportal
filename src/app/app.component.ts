import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Toast, ToasterConfig, ToasterService } from 'angular2-toaster';
import { role } from './model/role_features';
import { AuthenticatorService } from './services/authenticator.service';
import { CommonServiceFactory } from './services/common-service';
import { LoginService } from './services/login-services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewChecked {

  /* Toaster handlers */
  /* ToasterConfig ==> {
    animation: 'fade', 'flyLeft', 'flyRight', 'slideDown', and 'slideUp'
    limit: number
    tapToDismiss: false
    showCloseButton: true === or else ==== 'warning': true, 'error': false'
    newestOnTop: false
    timeout: 2000
    mouseoverTimerStop: false
  } */

  public config: ToasterConfig = new ToasterConfig({ positionClass: 'toast-top-right', limit: 1, timeout: 5000, mouseoverTimerStop: true, });
  isloggedInAdmin: boolean = false;

  /* Variable for Zendesk */
  ticketId = "";
  addReportPopup: boolean = false;
  closechatbot: boolean = true;

  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private log: LoginService,
    public commonService: CommonServiceFactory,
    public auth:AuthenticatorService,
    private cd :ChangeDetectorRef,
    private role_feature: role
  ) {
    this.role_feature.checkPermissions();
  }


  ngOnInit() {
    this.routerEvents();
    this.isloggedInAdmin = this.commonService.checkUserIsAdmin();
  }

  ngAfterViewChecked(){
    this.cd.detectChanges();
  }
  // Router Event Ripple
  routerEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.auth.showLoader();
        if (sessionStorage.getItem('userid') != null) {
          this.log.changeSidenavStatus('authorized');
        }
      }
      else if (event instanceof NavigationEnd) {
        this.auth.hideLoader();
      }
      else if (event instanceof NavigationCancel) {
        this.auth.hideLoader();
        if (sessionStorage.getItem('userid') != null) {
          this.log.changeSidenavStatus('authorized');
        }
      }
      else if (event instanceof NavigationError) {
        this.auth.hideLoader();
        if (sessionStorage.getItem('userid') != null) {
          this.log.changeSidenavStatus('authorized');
        }
      }
    });
  }

  public popToast(data) {
    var toast: Toast = {
      type: data.type,
      title: data.title,
      body: data.body
    };
    this.toasterService.pop(toast);
  }

  handler(f) {
    let flag: any = f;

    if (flag.hasOwnProperty('ticket')) {
      this.addReportPopup = true;
      this.ticketId = flag.ticket.id;
      this.closechatbot = false;
    }
    else {
      this.closechatbot = false;
    }
  }

  closeReportPopup() {
    this.addReportPopup = false;
  }

}
