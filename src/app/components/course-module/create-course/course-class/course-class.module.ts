import { NgModule } from '@angular/core';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseClassRouting } from './course-class.routing.module';
import { CourseClassComponent } from './course-class.component';
import { ClassHomeComponent, DateFormat } from './class-home/class-home.component';
import { ClassAddComponent } from './class-add/class-add.component';
import 'moment';
import 'hammerjs';
// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import { FileUploadModule, SplitButtonModule, MenuModule, MenuItem, ButtonModule } from 'primeng/primeng';
import { ClassScheduleService } from '../../../../services/course-services/class-schedule.service';
// import { TreeviewModule } from 'ngx-treeview';
import { TopicListingService } from '../../../../services/course-services/topic-listing.service';

@NgModule({
    imports: [
        TreeViewModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        // BsDatepickerModule,
        TimepickerModule,
        FileUploadModule,
        SplitButtonModule,
        ButtonModule,
        MenuModule,
        SharedModule,
        CourseClassRouting,
    ],
    exports: [],
    declarations: [
        CourseClassComponent,
        ClassHomeComponent,
        ClassAddComponent,
        DateFormat

    ],
    providers: [
        ClassScheduleService,
        TopicListingService
    ]
})

export class CourseClassModule {

}
