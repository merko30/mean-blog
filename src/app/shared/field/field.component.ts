import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';

  @Input() name: string = '';
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() label: string = '';
}
