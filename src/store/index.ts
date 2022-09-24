import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from 'src/app/auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}
