
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, ActionsSubject } from '@ngrx/store';


import { AuthService } from './../../auth/auth.service';
import { ValidationErrors } from '@angular/forms/src/directives/validators';

import * as fromReducer from '../../store/app.reducer';
import * as fromActions from '../store/auth.actions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message$: Observable<string>;
  messageClass: string;
  RegisterForm: FormGroup;
  processing: boolean = false;
  isLoading: Observable<Boolean>
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder, private actionsSubject: ActionsSubject, private store: Store<fromReducer.AppState>) {

    this.isLoading = this.store.select(fromReducer.getAuthLoading);

    this.actionsSubject.subscribe(action => {
      if (action.type === fromActions.REGISTER_SUCCESS) {
        this.message$ = (action as any).payload.message;
        this.messageClass = 'alert alert-success';
      }
      if (action.type === fromActions.REGISTER_FAILURE) {
        this.message$ = (action as any).payload.error.message;
        this.messageClass = 'alert alert-danger';
        this.RegisterForm.reset();
      }
    })

  }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      username: new FormControl(null, Validators.required),
      avatar: new FormControl(null, Validators.required)
    }, { updateOn: 'blur' });
  }


  onRegister() {
    this.store.dispatch(new fromActions.Register(this.RegisterForm.value));

  }
}
