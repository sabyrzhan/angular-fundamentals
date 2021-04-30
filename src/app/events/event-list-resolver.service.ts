import {Resolve} from '@angular/router';
import {EventsService, IEvent} from './shared';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventsService) { }

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }
}
