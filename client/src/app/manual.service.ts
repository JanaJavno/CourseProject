import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from './token';

@Injectable({
  providedIn: 'root'
})
export class ManualService {
  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get('/api/getManuals');
  }

  public getTest() {
    return this.http.get('/api/greeting');
  }
}
