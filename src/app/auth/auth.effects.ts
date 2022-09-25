import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import {
  failure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from './auth.actions';

import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart.type),
      exhaustMap((credentials: { email: string; password: string }) =>
        this.authService.login(credentials).pipe(
          map((response) => {
            console.log(response);
            return loginSuccess();
          }),
          catchError(({ error }) => {
            return of(failure({ error: error.message }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerStart.type),
      exhaustMap(
        (credentials: { username: string; email: string; password: string }) =>
          this.authService.register(credentials).pipe(
            map((response) => {
              console.log(response);
              return registerSuccess();
            }),
            catchError(({ error }) => {
              return of(failure({ error: error.message }));
            })
          )
      )
    )
  );
}
