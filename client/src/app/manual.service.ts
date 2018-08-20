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
    return this.http.get('/api/manuals/');
  }

  public getTest() {
    return this.http.get('/api/greeting');
  }
  public getCategory(type: string) {
    return this.http.get('/api/manuals/category/' + type);
  }
}
