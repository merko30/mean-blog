import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loginStart } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  form: FormGroup;

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      console.log('valid');
    } else {
      console.log('not valid');
    }
    // this.store.dispatch(
    //   loginStart({ email: this.email, password: this.password })
    // );
  }
}
