import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser;
  constructor(private http: HttpClient) { }

  public addNewUser(user) {
    return this.http.post('/api/registration', JSON.stringify(user));
  }
}
