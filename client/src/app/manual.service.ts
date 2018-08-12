import { Injectable } from '@angular/core';

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
  constructor() { }

  public getAll() {
    return this.manuals;
  }
}
