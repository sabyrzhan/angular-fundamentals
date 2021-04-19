import {
  EventsListComponent,
  EventDetailsComponent,
  EventCreateComponent,
  EventRouteActivatorService
} from './events/index';
import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {EventListResolverService} from './events/event-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: EventCreateComponent
  },
  {
    path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}
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
