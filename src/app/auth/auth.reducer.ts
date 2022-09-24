import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginStart, loginSuccess } from './auth.actions';

export interface AuthState {
  loading: Boolean;
  loggedIn: Boolean;
  error: string | null;
}

export const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(loginSuccess, (state) => ({
    ...state,
    loading: false,
    loggedIn: true,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
