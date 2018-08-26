import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public popupClass = 'custom-class';
  icon = 'user';
  data: Array<any> = [{
    text: 'My Profile'
  }, {
    text: 'Account Settings'
  }, {
    text: 'Support'
  }, {
    text: 'Log Out'
  }];
  dropDownEvents = {
    'My Profile': () => { this.toProfile(); },
    'Account Settings': () => { this.toAccountSettings(); },
    'Support': () => { this.toSupport(); },
    'Log Out': () => { this.toLogOut(); },
  };
  public state = false;
  isAuthenticated = this.authService.isAuthenticated();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  toProfile() {
    alert('My Profile');
  }

  toAccountSettings() {
    alert('Account Settings');
  }

  toSupport() {
    alert('Support');
  }

  toLogIn() {
    this.state = true;
  }

  toLogOut() {
    this.authService.logout();
    location.reload();
  }

  dropDownClick(event) {
    this.dropDownEvents[event.text]();
  }
}
