import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Sign In Start',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction('[Auth] Sign In Success');

export const failure = createAction(
  '[Auth] Failure',
  props<{ error: string }>()
);

export const registerStart = createAction(
  '[Auth] Sign Up Start',
  props<{ username: string; email: string; password: string }>()
);

export const registerSuccess = createAction('[Auth] Sign Up Success');
