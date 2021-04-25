import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  EventCreateComponent,
  EventRouteActivatorService,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import {Error404Component} from './errors/404.component';
import {EventListResolverService} from './events/event-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent} from './common/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
