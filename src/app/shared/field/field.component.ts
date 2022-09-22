import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string | number = '';

  @Input() name: string = '';
  @Input() label: string = '';
  @Input() error: string | undefined = undefined;
  @Output() changeEvent = new EventEmitter<string | number>();

  onChange(value: string | number): void {
    this.value = value;
    this.changeEvent.emit(value);
  }
}
