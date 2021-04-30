import {Injectable, EventEmitter} from '@angular/core';
import {IEvent, ISession} from './event.model';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events').pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id).pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(newEvent: IEvent): Observable<IEvent> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<IEvent>('/api/events', newEvent, options).pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchText: string): Observable<ISession> {
    return this.http.get<ISession[]>('/api/events/search?search=' + searchText)
                      .pipe(catchError(this.handleError<ISession[]>('searchSessions', [])));
  }
}
