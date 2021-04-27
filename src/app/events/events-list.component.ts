import {Component, OnInit} from '@angular/core';
import {EventsService} from './shared/events.service';
import {IEvent} from './shared';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <div>
      <br /><br />
      <h1>Upcoming Angular Events</h1>
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
  events: IEvent[] = [];

  constructor(private eventsService: EventsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
}
