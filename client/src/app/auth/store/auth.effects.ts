import { Injectable } from "@angular/core";

import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";

import { Observable } from "rxjs/Observable";
import {
  concatMap,
  switchMap,
  map,
  catchError,
  tap,
  mergeMap,
  debounceTime
} from "rxjs/operators";
import { of } from "rxjs/observable/of";

import { AuthService } from "./../auth.service";
import * as authActions from "../store/auth.actions";
import * as routeActions from "../../store/routing.actions";
import * as messageActions from "../../messages/messages.actions";

import { User } from "../../models/user.model";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(authActions.REGISTER)
    .pipe(
      map((action: authActions.Register) => action.payload),
      concatMap(user => {
        return this.authService.RegisterUser(user);
      })
    )
    .pipe(
      map(message => ({
        type: authActions.REGISTER_SUCCESS,
        payload: message
      })),
      catchError(err => {
        return Observable.of({
          type: authActions.REGISTER_FAILURE,
          payload: err
        });
      })
    );

  @Effect()
  login$: Observable<Action> = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.Login) => action.payload),
    switchMap(user =>
      this.authService.LoginUser(user).pipe(
        map(res => new authActions.LoginSuccess(res)),
        catchError(error => of(new authActions.LoginFailure(error)))
      )
    )
  );

  @Effect()
  showErrorMessages$: Observable<Action> = this.actions$
    .ofType(authActions.LOGIN_FAILURE, authActions.REGISTER_FAILURE)
    .pipe(
      map(
        (action: authActions.LoginFailure | authActions.RegisterFailure) =>
          new messageActions.ShowMessage(
            action.payload.error,
            "alert alert-danger"
          )
      )
    );

  @Effect()
  setTokenAndRedirect$: Observable<Action> = this.actions$
    .ofType(authActions.LOGIN_SUCCESS)
    .pipe(
      tap((action: authActions.LoginSuccess) => {
        localStorage.setItem("token", action.payload.token);
      })
    )
    .pipe(
      debounceTime(3000),
      mergeMap(login => [
        new routeActions.Go({ path: ["/"] }),
        new messageActions.ClearMessage(),
        new authActions.GetUser(this.authService.getCurrentUserId())
      ])
    );

  @Effect()
  showSuccessMessage$: Observable<Action> = this.actions$
    .ofType(authActions.REGISTER_SUCCESS, authActions.LOGIN_SUCCESS)
    .pipe(
      map(
        (action: authActions.RegisterSuccess | authActions.LoginSuccess) =>
          new messageActions.ShowMessage(action.payload, "alert alert-success")
      )
    );

  @Effect()
  registerRedirect$: Observable<Action> = this.actions$
    .ofType(authActions.REGISTER_SUCCESS)
    .pipe(
      debounceTime(3000),
      mergeMap(action => [
        new routeActions.Go({ path: ["/login"] }),
        new messageActions.ClearMessage()
      ])
    );

  @Effect()
  logout$: Observable<Action> = this.actions$.ofType(authActions.LOGOUT).pipe(
    map((action: authActions.Logout) => {
      this.authService.logout();
    }),
    map(() => new routeActions.Go({ path: ["/login"] }))
  );

  @Effect()
  getUserInfo$: Observable<Action> = this.actions$
    .ofType(authActions.GET_USER)
    .pipe(
      map((action: authActions.GetUser) => action.id),
      concatMap(id =>
        this.authService.getUser(id).pipe(
          map((res: User) => {
            return new authActions.GetUserSuccess(res);
          })
        )
      )
    );
}
