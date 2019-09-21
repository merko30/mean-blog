import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  loginForm: FormGroup;

  createForm() {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
