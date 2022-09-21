import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { login } from "../auth.actions";
import { State } from "src/app/reducers";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
    this.createForm();
    this.error = this.store.select(state => state.authState.error);
  }

  error: Observable<String>;
  loginForm: FormGroup;

  createForm() {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(login({ user: this.loginForm.value }));
  }
}
