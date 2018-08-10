import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store/app.reducer";
import * as fromActions from "../store/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  message: Observable<String>;
  messageClass: Observable<String>;
  LoginForm: FormGroup;
  isLoading: Observable<Boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {
    this.isLoading = this.store.select(fromStore.getAuthLoading);
    this.message = this.store.select(fromStore.getMessage);
    this.messageClass = this.store.select(fromStore.getClass);
  }

  ngOnInit() {
    this.LoginForm = this.fb.group(
      {
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      },
      { updateOn: "blur" }
    );
  }

  onLogin() {
    this.store.dispatch(new fromActions.Login(this.LoginForm.value));
  }
}
