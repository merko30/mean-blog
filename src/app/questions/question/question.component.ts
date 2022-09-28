import { Component, Input, OnInit } from '@angular/core';

import { Question } from '../types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  question!: Question;
}
