import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public items: any[] = [
    { title: 'Best of manuals', url: '..//assets/Henningsvaer-(Norway).jpg' },
    { title: 'Best of manuals', url: '..//assets/Ship-between-cliffs.jpg' },
    { title: 'Best of manuals', url: '..//assets/Vestmanland-(Sweden).jpg' }
  ];
  public width = '1500px';
  public height = '400px';

  public blockItems: any[] = [
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' },
    { title: 'How to slice a pineapple', url: '..//assets/pineapple.jpg' }];
  constructor() { }

  ngOnInit() {
  }

}
