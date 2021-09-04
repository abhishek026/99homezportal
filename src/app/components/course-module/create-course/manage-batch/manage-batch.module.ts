import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageBatchComponent } from './manage-batch.component';
import { ManageBatchService } from '../../../../services/course-services/manage-batch.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        // BsDatepickerModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ManageBatchComponent
            }
        ])
    ],
    exports: [],
    declarations: [
        ManageBatchComponent
    ],
    providers: [
        ManageBatchService
    ]
})

export class ManageBatchModule {

}
