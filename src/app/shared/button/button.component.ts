import { Component, Input, OnInit } from '@angular/core';

import { ButtonVariant } from 'src/constants';

const CLASSES = {
  primary: 'bg text-reverse',
  error: 'bg-error text-white',
  info: '',
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() variant: ButtonVariant = ButtonVariant.primary;

  @Input() className: string = '';

  class: string = `${CLASSES[this.variant]} ${this.className}`;

  @Input() type: 'submit' | 'button' = 'submit';
  @Input() isLink: Boolean = false;
  @Input() href?: string;
}
