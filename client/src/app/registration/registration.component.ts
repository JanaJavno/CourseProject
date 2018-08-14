import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formControl: FormGroup;
  email = '';
  username = '';
  password = '';
  constructor(private fb: FormBuilder, private authService: AuthService
  ) {
    this.formControl = this.fb.group({
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe((value) => console.log(value));
  }
  addUser(user) {
    this.authService.addNewUser(user)
      .subscribe(currentUser0 => this.authService.currentUser = currentUser0);
  }

}
