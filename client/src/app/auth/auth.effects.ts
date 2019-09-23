import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "./auth.service";
import {
  register,
  registerSuccess,
  login,
  loginSuccess,
  loginFailure,
  registerFailure,
  logout,
  setStatus
} from "./auth.actions";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { TokenResponse } from "./user";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(action => {
        return this.authService.register(action.user).pipe(
          map(() => registerSuccess()),
          catchError(({ error: { message } }) =>
            of({ type: registerFailure.type, error: message })
          )
        );
      })
    )
  );

  afterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(() => this.router.navigate(["/login"]))
      ),
    { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(action =>
        this.authService.login(action.user).pipe(
          map((response: TokenResponse) => {
            this.authService.storeToken(response.token);
            return loginSuccess({ response });
          }),
          catchError(({ error: { message } }) =>
            of({ type: loginFailure.type, error: message })
          )
        )
      )
    )
  );

  afterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigate(["/"]))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.authService.clearToken();
          this.router.navigate(["/"]);
        })
      ),
    { dispatch: false }
  );
}
