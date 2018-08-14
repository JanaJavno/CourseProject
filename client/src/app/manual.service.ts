import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManualService {
  private manuals = [
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' }
    ];
  constructor(private http: HttpClient) {
  }

  public getAll() {
    /*return this.http.get('https://jsonplaceholder.typicode.com/photos');*/
    return this.manuals;
  }

  public getTest() {
    return this.http.get('/api/greeting');
  }
}
