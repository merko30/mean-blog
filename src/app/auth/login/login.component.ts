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
  form: FormGroup;

  constructor(private store: Store) {
    this.form = new FormGroup({
      email: new FormControl('jack@gmail.com', [Validators.email]),
      password: new FormControl('password', [Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.store.dispatch(loginStart(this.form.value));
    } else {
      console.log('not valid');
    }
  }
}
