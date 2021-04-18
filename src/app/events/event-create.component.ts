import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <h1>New event</h1>
    <hr/>
    <div class="row">
      <div class="col-md-6">
        <h3>[Create event form will go here]</h3>
        <br/><br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
      </div>
    </div>
  `
})
export class EventCreateComponent {

  constructor(private router: Router) {
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
