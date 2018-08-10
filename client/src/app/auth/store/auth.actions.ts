import { Action } from "@ngrx/store";

import { User } from "../../models/user.model";

export const REGISTER = "[Auth] Register";
export const REGISTER_SUCCESS = "[Auth] RegisterSuccess";
export const REGISTER_FAILURE = "[Auth] RegisterFailure";
export const LOGIN = "[Auth] Login";
export const LOGIN_SUCCESS = "[Auth] LoginSuccess";
export const LOGIN_FAILURE = "[Auth] LoginFailure";
export const LOGOUT = "[Auth] Logout";
export const GET_USER = "[Auth] GetUser";
export const GET_USER_SUCCESS = "[Auth] GetUserSuccess";
export const GET_USER_FAILED = "[Auth] GetUserFailed";

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: User) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: any) {}
}

export class RegisterFailure implements Action {
  readonly type = REGISTER_FAILURE;

  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public id: string) {}
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;

  constructor(public user: User) {}
}
export class GetUserFailed implements Action {
  readonly type = GET_USER_FAILED;

  constructor(public payload) {}
}

export type AuthActions =
  | Register
  | RegisterSuccess
  | RegisterFailure
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | GetUser
  | GetUserSuccess
  | GetUserFailed;
