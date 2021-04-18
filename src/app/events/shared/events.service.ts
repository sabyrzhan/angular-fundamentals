import {Injectable} from '@angular/core';

@Injectable()
export class EventsService {
  getEvents(): any {
    return EVENTS;
  }

  getEvent(id: number): any {
    return EVENTS.find(event => event.id === id);
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect 1',
    date: '9/26/2036',
    time: '08:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 2,
    name: 'Angular Connect 2',
    date: '9/26/2036',
    time: '09:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 3,
    name: 'Angular Connect 3',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png'
  },
  {
    id: 4,
    name: 'Angular Connect 4',
    date: '9/26/2036',
    time: '22:00 pm',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
];
