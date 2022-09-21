import { Component, OnInit, Output, Input } from "@angular/core";
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup
} from "@angular/forms";
import { EventEmitter } from "events";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class TextareaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  name: String;

  @Input()
  formControlName: String;

  @Input()
  form: FormGroup;

  @Input()
  rows: Number;

  @Input()
  label: String;

  @Output() onChange = new EventEmitter();

  change(value: string) {
    this.onChange.emit(value);
  }
}
