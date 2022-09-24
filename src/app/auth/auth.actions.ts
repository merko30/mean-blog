import { createAction, props } from '@ngrx/store';

export const loginStart = createAction('[Auth] Sign In Start');

export const loginSuccess = createAction('[Auth] Sign In Success');

export const loginFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: string }>()
);
