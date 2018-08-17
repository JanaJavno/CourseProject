import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() state;
  @Output() closeGlobal =  new EventEmitter<boolean>();
  loginFormControl: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginFormControl = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public close() {
    this.closeGlobal.emit(false);
    this.state = false;
  }

  public open() {
    this.state = true;
  }

  loginUser(user) {
    this.authService.login(user).
    then(response => {
        localStorage.setItem('currentUser', response.token);
        this.close();
        location.reload();
      },
        responsef =>  alert('User is not found'));
  }
}
