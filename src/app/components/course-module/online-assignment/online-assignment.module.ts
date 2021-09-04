import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineAssignmentRoutingModule } from './online-assignment-routing.module';

/* Modules */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FileUploadModule, SplitButtonModule, MenuModule, MenuItem } from 'primeng/primeng';
// online assignmetn components used
import { ListAssignmentComponent } from './list-assignment/list-assignment.component';
import { ManageAssignmentComponent } from './manage-assignment/manage-assignment.component';
import { ReviewAssignmentComponent } from './review-assignment/review-assignment.component';
import { OnlineAssignmentComponent } from './online-assignment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule,
    FileUploadModule,
    SplitButtonModule,
    OnlineAssignmentRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    OnlineAssignmentComponent,
    ListAssignmentComponent,
    ManageAssignmentComponent,
    ReviewAssignmentComponent
  ]
})
export class OnlineAssignmentModule { }
