import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { EnquiryReportComponent } from './enquiry-report/enquiry-report.component';
/* Modules */
import { FormsModule } from "@angular/forms";
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FileUploadModule, MenuModule, SplitButtonModule } from 'primeng/primeng';
import { PopupHandlerService } from '../../services/enquiry-services/popup-handler.service';
import { ExportToPdfService } from '../../services/export-to-pdf.service';
import { HttpService } from '../../services/http.service';
import { ManageExamModule } from '../master/master.module';
import { SharedModule } from '../shared/shared.module';
import { DataSetupComponent } from './data-setup/data-setup.component';
import { EnquiryAddComponent } from './enquiry-add/enquiry-add.component';
import { UserEnquiryComponent } from './enquiry/enquiry-custom/user-enquiry.component';
import { LeadsHomeComponent } from './leads-home/leads-home.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { ManageCampaignComponent } from './manage-campaign/manage-campaign.component';
import { CampaignService } from './services/campaign.service';
import { ClosingReasonService } from './services/closing-reason.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CheckBoxConverterPipe } from '../custom-common/check-box-converter.pipe';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    // BsDatepickerModule,
    TimepickerModule,
    FileUploadModule,
    SplitButtonModule,
    MenuModule,
    SharedModule,
    LeadsRoutingModule,
    ManageExamModule,
    EditorModule
  ],
  declarations: [
    LeadsComponent,
    LeadsHomeComponent,
    EnquiryAddComponent,
    DataSetupComponent,
    UserEnquiryComponent,
    ManageCampaignComponent,
    CheckBoxConverterPipe
    // EnquiryReportComponent
  ],
  entryComponents: [
    LeadsComponent,
    UserEnquiryComponent
  ],
  providers: [
    CampaignService,
    PopupHandlerService,
    ClosingReasonService,
    ExportToPdfService,
    HttpService
  ],
  exports: [
    UserEnquiryComponent
  ]
})
export class LeadsModule { }