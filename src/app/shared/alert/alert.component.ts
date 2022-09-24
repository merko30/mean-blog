import { Component, OnInit } from '@angular/core';
import { AlertVariant } from 'src/constants';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  variant: AlertVariant = AlertVariant.error;
  className: string = `${this.variant}`;
}
