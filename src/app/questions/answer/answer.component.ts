import { Component, Input, OnInit } from '@angular/core';

import { Answer } from '../types';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() answer!: Answer;
}
