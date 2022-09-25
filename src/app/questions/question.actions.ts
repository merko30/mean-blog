import { createAction, props } from '@ngrx/store';

import { Question } from './types';

export const loadQuestions = createAction('[Question] Load questions');

export const loadQuestionsSuccess = createAction(
  '[Question] Load questions success',
  props<{ questions: Question[] }>()
);

export const failure = createAction(
  '[Question] Failure',
  props<{ error: string }>()
);
