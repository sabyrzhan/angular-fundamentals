import {Component, OnInit} from '@angular/core';
import {EventsService} from '../shared/events.service';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {IEvent, ISession} from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        width: 50px;
      }

      a {
        cursor: pointer;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  addMode = false;
  filter = '';
  sort = 'votes';

  constructor(private eventService: EventsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: Data) => {
      this.event = data.event;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(newSession: ISession): void {
    const nextId = Math.max.apply(null, this.event ? this.event!.sessions?.map(s => s.id) : [0]);
    newSession.id = nextId + 1;
    this.event?.sessions?.push(newSession);
    this.eventService.saveEvent(this.event!).subscribe();
    this.addMode = false;
  }

  cancelNewSession(): void {
    this.addMode = false;
  }
}
