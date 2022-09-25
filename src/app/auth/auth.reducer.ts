import { createReducer, on } from '@ngrx/store';
import {
  failure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from './auth.actions';

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
  on(failure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(registerStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(registerSuccess, (state) => ({
    ...state,
    loading: false,
    loggedIn: true,
  }))
);
