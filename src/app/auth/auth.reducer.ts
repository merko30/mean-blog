import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginStart, loginSuccess } from './auth.actions';

interface InitialState {
  loading: Boolean;
  loggedIn: Boolean;
  error: String | null;
}

export const initialState: InitialState = {
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
