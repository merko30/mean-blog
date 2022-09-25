import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from 'src/app/auth/auth.reducer';
import { QuestionState } from 'src/app/questions/question.reducer';

export interface AppState {
  auth: AuthState;
  questions: QuestionState;
}
