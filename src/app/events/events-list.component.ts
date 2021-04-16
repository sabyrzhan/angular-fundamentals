import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template: `
    <div>
      <br /><br />
      <h1>Upcoming Angular Events</h1>
      <div class="well hoverwell">Hello world!</div>
      <hr/>
      <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
