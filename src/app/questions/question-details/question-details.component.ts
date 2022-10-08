import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/store';

import { loadQuestion } from '../question.actions';

import { Question } from '../types';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
})
export class QuestionDetailsComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute
  ) {
    this.store
      .select((state: AppState) => state.questions.question)
      .subscribe((question) => {
        this.question = question;
      });
    this.loading = this.store.select((state) => state.questions.loading);
  }

  loading: Observable<Boolean>;
  question?: Question | null;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.store.dispatch(loadQuestion({ id: params['id'] }));
    });
  }
}
