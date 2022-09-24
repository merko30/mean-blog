import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class FieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() error: string | undefined = undefined;
  @Input() control: AbstractControl | null = new FormControl();
}
