import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formControl: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router
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
    this.authService.addNewUser(user).
    then(
      values => {
        alert('Thanks for registration');
        this.router.navigate(['']);
        }, valuef => alert('User with this name has already existed'));
  }

}
