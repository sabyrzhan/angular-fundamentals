import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-button">
          <i class="fas fa-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voting-count"><div>{{count}}</div></div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input()
  count = 0;
  @Input()
  set voted(isVoted: boolean) {
    this.iconColor = isVoted ? 'red' : 'white';
  }

  @Output()
  vote = new EventEmitter();
  iconColor = '';

  onClick(): void {
    this.vote.emit({});
  }
}
