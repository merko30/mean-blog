import { createAction, props } from "@ngrx/store";
import { RegisterInput, LoginInput, TokenResponse } from "./user";

export const setStatus = createAction(
  "[Authentication] SetStatus",
  props<{ status: boolean }>()
);

export const register = createAction(
  "[Authentication] Register",
  props<{ user: RegisterInput }>()
);

export const registerSuccess = createAction("[Authentication] RegisterSuccess");

export const registerFailure = createAction(
  "[Authentication] RegisterFailure",
  props<{ error: String }>()
);

export const login = createAction(
  "[Authentication] Login",
  props<{ user: LoginInput }>()
);

export const loginSuccess = createAction(
  "[Authentication] LoginSuccess",
  props<{ response: TokenResponse }>()
);

export const loginFailure = createAction(
  "[Authentication] LoginFailure",
  props<{ error: String }>()
);
