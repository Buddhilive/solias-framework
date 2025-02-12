import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SoliasComponentsComponent } from '@solias-framework/solias-components';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'components',
        component: SoliasComponentsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
