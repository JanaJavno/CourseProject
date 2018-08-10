import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() state;
  @Output() closeGlobal =  new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.closeGlobal.emit(false);
    console.log(`Dialog result: ${this.state}`);
    this.state = false;
    console.log(`Dialog result: ${this.state}`);
  }

  public open() {
    console.log(`Dialog result: ${this.state}`);
    this.state = true;
  }
  public temp() {
    console.log(this.state);
    this.state = true;
    console.log(this.state);
  }
}
