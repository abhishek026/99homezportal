import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FileUploadModule, SplitButtonModule, MenuModule, MenuItem } from 'primeng/primeng';
import 'moment';

import { ExcelService } from '../../services/excel.service';

import { ExpenseManagementRoutingModule } from './expense-management-routing.module';
import { ExpenseManagementComponent } from './expense-management.component';
import { DataSetupComponent } from './data-setup/data-setup.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { ManageIncomeComponent } from './manage-income/manage-income.component';
import { ReportsComponent } from './reports/reports.component';
import { ExpenseHomeComponent } from './expense-home/expense-home.component';
import { AddEditExpenseComponent } from './manage-expense/add-edit-expense/add-edit-expense.component';
import { AddEditIncomeComponent } from './manage-income/add-edit-income/add-edit-income.component';
import { AddEditPayeeComponent } from './data-setup/add-edit-payee/add-edit-payee.component';
import { AddEditPayerComponent } from './data-setup/add-edit-payer/add-edit-payer.component';
import { AddEditAccountComponent } from './data-setup/add-edit-account/add-edit-account.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './data-setup/add-edit-category/add-edit-category.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule,
    FileUploadModule,
    SplitButtonModule,
    CommonModule,
    ExpenseManagementRoutingModule,
    SharedModule
  ],
  declarations: [
    ExpenseManagementComponent,
    DataSetupComponent,
    ManageExpenseComponent,
    ManageIncomeComponent,
    ReportsComponent,
    ExpenseHomeComponent,
    AddEditExpenseComponent,
    AddEditIncomeComponent,
    AddEditPayeeComponent,
    AddEditPayerComponent,
    AddEditAccountComponent,
    AddEditCategoryComponent
  ],
  providers: [
    ExcelService
  ],
})
export class ExpenseManagementModule { }
