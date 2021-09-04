import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageDashboardComponent } from './homepage-dashboard.component';
// import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MarkAttendanceComponent} from './mark-attendance/mark-attendance.component';
import {ExamMarkUpdateComponent} from './exam-mark-update/exam-mark-update.component';
import { BatchModelComponent } from './exam-mark-update/batch-model/batch-model.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { SendToMessagesComponent } from './send-to-messages/send-to-messages.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomepageDashboardComponent,
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        redirectTo: 'admin'
                    },
                    // {
                    //     path: 'home',
                    //     component: HomeComponent
                    // },
                    {
                        path: 'admin',
                        component: AdminHomeComponent
                    },
                    {
                        path: 'mark-attendance',
                        component: MarkAttendanceComponent
                    },
                    {
                        path: 'exam-marks',
                        component: ExamMarkUpdateComponent
                    },
                    {
                        path: 'exam-marks-batch',
                        component: BatchModelComponent
                    },

                    {
                        path: 'send-notification',
                        component: SendNotificationComponent
                    },
                    {
                        path: 'send-to-messages',
                        component: SendToMessagesComponent
                    },
                    
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomepageDashboardRoutingModule {
}
