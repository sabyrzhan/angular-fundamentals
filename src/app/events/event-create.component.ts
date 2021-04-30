import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService, IEvent} from './shared';

@Component({
  templateUrl: './event-create.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input {
      background-color: #e3c3c5;
    }
    .error ::-webkit-input-placeholder {
      color: #999;
    }
    .error ::-moz-placeholder {
      color: #999;
    }
    .error :-moz-placeholder {
      color: #999;
    }
    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class EventCreateComponent {
  newEvent?: IEvent;

  constructor(private router: Router,
              private eventService: EventsService) {
  }

  saveEvent(formValues: any): void {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.router.navigate(['events']);
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
