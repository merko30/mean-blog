import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  ControlContainer,
  FormGroupDirective
} from "@angular/forms";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class TextInputComponent implements OnInit {
  constructor() {}

  @Input()
  name: String;

  @Input()
  formControlName: String;

  @Input()
  form: FormGroup;

  @Input()
  label: String;

  @Output() onChange = new EventEmitter();

  change(value: String) {
    this.onChange.emit(value);
  }

  ngOnInit() {}
}
