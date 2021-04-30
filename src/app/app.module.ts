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
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective
} from './events/index';

import {
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { EventsAppComponent } from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import {Error404Component} from './errors/404.component';
import {EventListResolverService} from './events/event-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const globalWindow = window as {[key:string]: any};
const toastr: Toastr = globalWindow['toastr'];
const jquery = globalWindow['$'];

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
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService,
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    VoterService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jquery
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
