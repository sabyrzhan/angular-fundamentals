import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-id')
  modalId = '';

  private el?: HTMLElement;

  constructor(ref: ElementRef,
              @Inject(JQ_TOKEN) private jQuery: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    console.log(this.modalId);
    this.jQuery(this.el).on('click', (e: any) => {
      this.jQuery(`#${this.modalId}`).modal({});
    });
  }
}
