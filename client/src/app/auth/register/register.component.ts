import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

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
    console.log(this.registerForm.value);
  }
}
