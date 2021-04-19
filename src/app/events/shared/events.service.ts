import {Injectable} from '@angular/core';
import {IEvent} from './event.model';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class EventsService {
  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id)!;
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect 1',
    date: new Date('9/26/2036'),
    time: '08:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: []
  },
  {
    id: 2,
    name: 'Angular Connect 2',
    date: new Date('9/26/2036'),
    time: '09:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: []
  },
  {
    id: 3,
    name: 'Angular Connect 3',
    date: new Date('9/26/2036'),
    time: '10:00 am',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    sessions: []
  },
  {
    id: 4,
    name: 'Angular Connect 4',
    date: new Date('9/26/2036'),
    time: '22:00 pm',
    price: 599,
    imageUrl: '/assets/images/Windows_10x_Icon.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: []
  }
];
