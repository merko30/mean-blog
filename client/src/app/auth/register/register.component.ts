import { Component, OnInit, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { register } from "../auth.actions";
import { State } from "src/app/reducers";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
    this.createForm();
    this.error = store.select(state => state.authState.error);
  }

  error: Observable<String>;
  registerForm: FormGroup;

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: [""],
      username: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      avatar: [""]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(register({ user: this.registerForm.value }));
  }
}
