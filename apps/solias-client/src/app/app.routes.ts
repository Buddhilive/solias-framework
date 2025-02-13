import { Route } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComponentsComponent } from './pages/components/components.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: ComponentsComponent,
        pathMatch: 'full'
    },
    {
        path: 'components',
        component: ComponentsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
