import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

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
  isAuthenticated = this.authService.isAuthenticated();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogInClick() {
    this.state = true;
  }

  onLogOutClick() {
    this.authService.logout();
    location.reload();
  }
}
