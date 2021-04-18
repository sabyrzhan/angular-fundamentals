import {Component, OnInit} from '@angular/core';
import {EventsService} from './shared/events.service';
import {ToastrService} from '../common/toastr.service';

@Component({
  template: `
    <div>
      <br /><br />
      <h1>Upcoming Angular Events</h1>
      <div class="well hoverwell">Hello world!</div>
      <hr/>
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumbnail [routerLink]="['/events', event.id]" [event]="event"></event-thumbnail>
        </div>
      </div>

    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventsService: EventsService,
              private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }
}
