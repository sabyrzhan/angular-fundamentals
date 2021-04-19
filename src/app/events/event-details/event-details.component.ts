import {Component, OnInit} from '@angular/core';
import {EventsService} from '../shared/events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        width: 50px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
