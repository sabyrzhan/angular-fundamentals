import {Injectable} from '@angular/core';
import {ISession} from '../shared';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {
  }

  deleteVoter(eventId: number, session: ISession, userName: string): void {
    session.voters = session.voters.filter(voter => voter !== userName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.delete(url, {}).pipe(catchError(this.handleError('delete voter'))).subscribe();

  }

  addVoter(eventId: number, session: ISession, userName: string): any {
    session.voters.push(userName);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    return this.http.post(url, {}, options).pipe(catchError(this.handleError('add voter'))).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(voter => voter === userName);
  }
}
