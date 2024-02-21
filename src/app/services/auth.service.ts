import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn :  boolean = true;
  redirectUrl: string = '';
  constructor() { }
  logIn(): Observable<boolean>{
    return of(true).pipe(
      delay(100),
      tap(() => this.isLoggedIn = true)
    )
  }
  logOut(){
    this.isLoggedIn = false;
  }
}