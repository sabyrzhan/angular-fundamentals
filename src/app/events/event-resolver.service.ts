import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {EventsService, IEvent} from './shared';
import {Injectable} from '@angular/core';

@Injectable()
export class EventResolverService implements Resolve<any>{
  constructor(private eventService: EventsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params.id);
  }
}
