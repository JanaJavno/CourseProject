import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from './token';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }
  public addNewUser(user) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset = utf-8'});
    return this.http.post<Token>('/api/registration', JSON.stringify(user), { headers: headers }).toPromise();
  }

  public login(user) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset = utf-8'});
    return this.http.post<Token>('/api/login', JSON.stringify(user), { headers: headers }).toPromise();
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
  }
}
