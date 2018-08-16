import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser;
  constructor(private http: HttpClient) { }

  public addNewUser(user) {
    console.log(JSON.stringify(user));
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset = utf-8'});
    return this.http.post<any>('/api/registration', JSON.stringify(user), { headers: headers });
  }
}
