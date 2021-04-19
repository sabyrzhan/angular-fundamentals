import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngClass]="getVeryEarlyClass()" [ngSwitch]="event?.time">
        Time: {{event.time}}
        <span *ngSwitchCase="'08:00 am'">(Very early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchCase="'22:00 pm'">(Too Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div [ngStyle]="getVeryEarlyStyle()">Price: \${{event.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 5px;
      }

      .well {
        margin-bottom: 10px;
        min-height: 200px;
      }

      .bold {
        font-weight: bold;
      }

      .green {
        color: green;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  getVeryEarlyClass(): string {
    return this.isVeryEarly() ? 'bold green' : '';
  }

  getVeryEarlyStyle(): any {
    return this.isVeryEarly() ? {color: 'green', fontWeight: 'bold'} : {};
  }

  private isVeryEarly(): boolean {
    return this.event && this.event?.time === '08:00 am';
  }
}
