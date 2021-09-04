import { NgModule } from '@angular/core';
import { CommunicateComponent, EmailReportComponent, EventManagmentComponent, ExamReportComponent, FilterPipe, PtmManagementComponent } from '.';
import { ExcelService } from '../../services/excel.service';
import { ExportToPdfService } from '../../services/export-to-pdf.service';
import { HttpService } from '../../services/http.service';
import { ExamService } from '../../services/report-services/exam.service';
import { getEmailService } from '../../services/report-services/get-email.service';
import { getSMSService } from '../../services/report-services/get-sms.service';
import { postSMSService } from '../../services/report-services/post-sms.service';
import { SharedModule } from '../shared/shared.module';
import { CommunicateRoutingModule } from './communicate-routing.module';
import { CoummunicateHomeComponent } from './coummunicate-home/coummunicate-home.component';
import { WidgetService } from '../../services/widget.service';
import { ProcturWidgetPopUpComponent } from './proctur-widget-pop-up/proctur-widget-pop-up.component';
// import { EventManagmentService } from '../../services/event-managment.service';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  imports: [
    SharedModule,
    CommunicateRoutingModule,
    EditorModule
  ],
  declarations: [
    CommunicateComponent,
    CoummunicateHomeComponent,
    PtmManagementComponent,
    ExamReportComponent,
    EmailReportComponent,
    EventManagmentComponent,
    FilterPipe,
    ProcturWidgetPopUpComponent,
  ],
  exports: [
    FilterPipe,
    EditorModule
  ],
  providers:[
    getSMSService,
    postSMSService,
    ExcelService,
    ExportToPdfService,
    ExamService,
    getEmailService,
    HttpService,
    WidgetService
  ]
})
export class CommunicateModule { }
