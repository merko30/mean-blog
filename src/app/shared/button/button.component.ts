import { Component, Input, OnInit } from '@angular/core';

import { ButtonVariant } from 'src/constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() variant: ButtonVariant = ButtonVariant.primary;
  @Input() class: string = '';
  @Input() type: 'submit' | 'button' = 'submit';
}
