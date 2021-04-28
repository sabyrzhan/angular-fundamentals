import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventsService, ISession} from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
        li > a.active-link {
        color: red !important;
      }
    `
  ]
})
export class NavbarComponent {
  searchText = '';
  foundSessions: ISession[] = [];

  constructor(public authService: AuthService,
              private eventService: EventsService) {
  }

  searchSessions(searchText: string): void {
    this.eventService.searchSessions(searchText).subscribe((sessions: any) => {
      this.foundSessions = sessions;
    });
  }
}
