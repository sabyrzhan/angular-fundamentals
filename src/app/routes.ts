import {
  EventsListComponent,
  EventDetailsComponent,
  EventCreateComponent,
  EventRouteActivatorService
} from './events/index';
import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: EventCreateComponent
  },
  {
    path: 'events', component: EventsListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
  {
    path: '404', component: Error404Component
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];
