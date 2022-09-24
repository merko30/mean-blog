import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store';

import { loginStart } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: Observable<string | null> = new Observable();

  constructor(private store: Store<AppState>) {
    this.form = new FormGroup({
      email: new FormControl('jack@gmail.com', [Validators.email]),
      password: new FormControl('password', [Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {
    this.error = this.store.select((state) => state.auth.error);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.store.dispatch(loginStart(this.form.value));
    } else {
      console.log('not valid');
    }
  }
}
