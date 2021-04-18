import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventsService} from '../shared/events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventsService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): any {
    const eventExists = !!this.eventService.getEvent(+route.params.id);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
