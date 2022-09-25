import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/store';

import { loadQuestions } from '../question.actions';

import { Question } from '../types';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.questions = this.store.select((state) => state.questions.questions);
  }

  ngOnInit(): void {
    this.store.dispatch(loadQuestions());
  }

  questions: Observable<Question[]>;
}
