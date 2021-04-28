import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{title}}</h4>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body" (click)="close()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body {
      height: 250px; overflow-y: scroll;
    }
  `]
})
export class SimpleModalComponent {
  @Input()
  title = '';
  @Input()
  elementId = '';
  @ViewChild('modalContainer')
  modalContainer?: ElementRef;

  constructor(@Inject(JQ_TOKEN) private jQuery: any) {
  }

  close(): void {
    if (this.modalContainer) {
      this.jQuery(this.modalContainer!.nativeElement).modal('hide');
    }
  }
}
