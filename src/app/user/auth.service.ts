import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  currentUser?: IUser;

  constructor(private http: HttpClient) {
  }

  loginUser(userName: string, password: string): Observable<any> {
    const loginInfo = {
      username: userName,
      password
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap((data: any) => {
        this.currentUser = data.user as IUser;
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser!.firstName = firstName;
    this.currentUser!.lastName = lastName;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(`/api/users/${this.currentUser!.id}'`, this.currentUser, options);
  }

  checkAuthStatus(): Observable<IUser> {
    return this.http.get('/api/currentIdentity').pipe(tap((data: any) => {
        if (data instanceof Object) {
          this.currentUser = data as IUser;
        }
      }));
  }

  logout(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('/api/logout', {}, options);
  }
}
