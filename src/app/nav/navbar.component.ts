import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';

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
  constructor(public authService: AuthService) {
  }
}
