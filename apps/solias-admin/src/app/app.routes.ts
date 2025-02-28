import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
