import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import {
  failure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from './auth.actions';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart.type),
      exhaustMap((credentials: { usernameOrEmail: string; password: string }) =>
        this.authService.login(credentials).pipe(
          map(({ token }: { token: string }) => {
            localStorage.setItem('token', token);
            return loginSuccess();
          }),
          tap(() => this.router.navigate(['/'])),
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
            map((response) => registerSuccess()),
            catchError(({ error }) => {
              return of(failure({ error: error.message }));
            })
          )
      )
    )
  );
}
