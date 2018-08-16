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
  constructor(private fb: FormBuilder, private authService: AuthService
  ) {
    this.formControl = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'username': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  ngOnInit() {
    /*this.formControl.valueChanges.subscribe((value) => console.log(value));*/
  }
  addUser(user) {
    this.authService.addNewUser(user).then(response => console.log(response));
  }

}
