import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public splitButtonData: Array<any> = [
    {
      text: 'Option 1'
    },
    {
      text: 'Option 2',
    },
    {
      text: 'Option 3',
    }
  ];
  public state = false;
  public dropdownButtonData: Array<any> = [
    {
      text: 'Option 1'
    },
    {
      text: 'Option 2',
    },
    {
      text: 'Option 3',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onLogClick() {
    this.state = true;
    console.log(`Dialog result: ${this.state}`);
  }
}
