import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MessageShowService } from '../../services/message-show.service';
import { ExportToPdfService } from '../../services/export-to-pdf.service';
import { ExcelService } from '../../services/excel.service';
import { TablePreferencesService } from '../../services/table-preference/table-preferences.service';
import { BasicInfoComponent, MockTestComponent, OnlineExamComponent,
  StudyMaterialComponent, ReviewProductComponent, VideoLectureComponent, ClassroomClassComponent,
  OnlineClassComponent, OfflineMaterialComponent,  ProductListComponent, HomeComponent, SalesReportsComponent,
  OfferHistoryComponent
} from '.';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { RegisteredStudentComponent } from './product-registered-student/product-registered-student.component';
import { EstoreRoutingModule } from './estore-routing.module';
import { ProductService } from '../../services/products.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpService } from '../../services/http.service';



@NgModule({
  imports: [
    CommonModule,
    EstoreRoutingModule,
    FormsModule,
    // BsDatepickerModule,
    TimepickerModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    EditorModule,
    FileUploadModule
  ],
  declarations: [
    ProductListComponent,
    ProductCreationComponent,
    BasicInfoComponent,
    MockTestComponent,
    OnlineExamComponent,
    StudyMaterialComponent,
    ReviewProductComponent,
    HomeComponent,
    SalesReportsComponent,
    VideoLectureComponent,
    ClassroomClassComponent,
    OnlineClassComponent,
    OfflineMaterialComponent,
    RegisteredStudentComponent,
    OfferHistoryComponent
  ],
  providers: [
    ExcelService,
    ExportToPdfService,
    MessageShowService,
    TablePreferencesService,
    ProductService,
    HttpService
  ],
  exports:[]
})
export class EstoreModule { }
