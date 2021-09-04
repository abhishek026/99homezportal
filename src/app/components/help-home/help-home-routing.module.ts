import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelpHomeComponent } from './help-home.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HelpHomeComponent,
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        redirectTo: 'faq',
                        pathMatch: 'full'
                    },
                    {
                        path: 'faq',
                        loadChildren: () => import('app/components/help-home/faq/faq.module').then(m => m.FaqModule),
                        // loadChildren: 'app/components/help-home/faq/faq.module#FaqModule',
                        pathMatch: 'prefix'
                    },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HelpHomeRoutingModule {

}