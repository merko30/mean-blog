import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store';
import { registerStart } from '../auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: Observable<string | null> = new Observable();

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        username: new FormControl('merim.hasanbegovic', [
          Validators.required,
          Validators.minLength(8),
        ]),
        email: new FormControl('merim.hasanbegovic@outlook.com', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('password', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { updateOn: 'submit' }
    );
  }

  ngOnInit(): void {
    this.error = this.store.select((state) => state.auth.error);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      this.store.dispatch(registerStart(this.form.value));
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field); // {2}
        if (control) {
          control.updateValueAndValidity();
        }
      });
    }
  }
}
