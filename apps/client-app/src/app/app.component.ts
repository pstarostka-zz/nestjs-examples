import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@vat-mvp/api-interfaces';
import { EMPTY, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'vat-mvp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  private getAllSubject = new Subject<void>();
  public getAll$ = this.getAllSubject.asObservable().pipe(
    // exhaustMap(() =>
    //   this.http.post('/api/user', {
    //     firstName: 'elo',
    //     lastName: 'elo',
    //     age: 3,
    //   })
    // )
    switchMap(() => this.http.get('/api/user').pipe(catchError(() => EMPTY))),
    catchError(() => EMPTY)
  );

  public login = () => {
    this.getAllSubject.next();
  };

  public save = async () =>
    await this.http
      .post('/api/user', {
        firstName: 'test',
        lastName: 'user',
        age: 23,
      })
      .toPromise();
}
