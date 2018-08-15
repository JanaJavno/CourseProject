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
    this.state = false;
  }

  public open() {
    this.state = true;
  }
}
