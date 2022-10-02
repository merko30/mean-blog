import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';

import {
  createQuestion,
  createQuestionSuccess,
  failure,
  loadQuestion,
  loadQuestions,
  loadQuestionsSuccess,
  loadQuestionSuccess,
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

  createQuestion$ = createEffect(() =>
    this.actions.pipe(
      ofType(createQuestion),
      exhaustMap(({ question }) =>
        this.questionService.create(question).pipe(
          map((question) => createQuestionSuccess(question)),
          catchError((error) => of(failure({ error })))
        )
      )
    )
  );

  getQuestion$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadQuestion),
      mergeMap(({ id }) =>
        this.questionService.getSingle(id).pipe(
          map(({ question }) => loadQuestionSuccess({ question })),
          catchError((error) => of(failure({ error })))
        )
      )
    )
  );
}
