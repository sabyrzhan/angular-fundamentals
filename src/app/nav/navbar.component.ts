import {Component} from '@angular/core';

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

}
