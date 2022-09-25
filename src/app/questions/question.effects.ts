import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import {
  failure,
  loadQuestions,
  loadQuestionsSuccess,
} from './question.actions';

import { QuestionService } from './question.service';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions: Actions,
    private questionService: QuestionService
  ) {}

  getQuestions$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadQuestions),
      mergeMap(() =>
        this.questionService.getAll().pipe(
          map(({ questions }) => loadQuestionsSuccess({ questions })),
          catchError((error) => of(failure({ error })))
        )
      )
    )
  );
}
