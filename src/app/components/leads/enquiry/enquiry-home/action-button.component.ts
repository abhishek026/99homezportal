import { Component, OnInit, OnChanges, HostListener, ElementRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { PopupHandlerService } from '../../../../services/enquiry-services/popup-handler.service';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { role } from '../../../../model/role_features';

@Component({
  selector: 'enquiry-actions',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})

export class ActionButtonComponent implements OnInit, OnChanges {

  /* Variable for displayng the popUp */
  private showMenu: boolean = false;
  private isProfessional: boolean = false;
  private isActionDisabled: boolean;
  hasStudentAccess: boolean = false;
  @Input() rowData: any;
  /* message to describe which popup to be opened  */
  message: string = "";

  @Output() eventSelected = new EventEmitter<string>();
  hasDeleteAccess: boolean = false;
  role_feature = role.features;

  constructor(
    private pops: PopupHandlerService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
    private eRef: ElementRef,
    private auth: AuthenticatorService
  ) { }

  /* OnInit function to listen the changes in message value from service */
  ngOnInit() { }

  ngOnChanges() {
    this.rowData;
    this.professionalStatus();
    this.pops.currentMessage.subscribe(message => this.message = message);
    this.pops.currentActionValue.subscribe(data => this.isActionDisabled = data);
    let permissions: any[] = [];
    this.setRoleAccess();
    this.cd.markForCheck();
  }

  /* open action menu on click */
  openMenu(ev) {
    this.showMenu = !this.showMenu;
  }

  /* close action menu on events  */
  closeMenu() {
    this.showMenu = false;
  }

  /* function to determine which pop up has to be opened on parent component */
  openPopup(eventData) {
    this.pops.changeMessage(eventData);
  }

  /* if user select edit navigate him to edit page directly from here */
  NavigateToEdit() {
    this.router.navigate(['/view/leads/enquiry/edit/' + this.rowData.institute_enquiry_id]);
  }

  professionalStatus() {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )

  }

  setRoleAccess() {
    if (sessionStorage.getItem('permissions') == null || sessionStorage.getItem('permissions') == undefined
      || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('username') == 'admin') {
      this.hasStudentAccess = true;
      this.hasDeleteAccess = true;
    }
    else {
      let permissions: any[] = [];
      permissions = JSON.parse(sessionStorage.getItem('permissions'));
      if (this.role_feature.STUDENT_MENU_ITEM) {
        this.hasStudentAccess = true;
        this.hasDeleteAccess = false;
      }
      else if (this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
        this.hasStudentAccess = false;
        // this.hasDeleteAccess = true;
      }
      else {
        this.hasStudentAccess = false;
        this.hasDeleteAccess = false;
      }
    }
  }


  @HostListener("document:click", ['$event'])
  onWindowClick(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.showMenu = false;
    }
  }

}
