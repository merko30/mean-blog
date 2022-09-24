import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { loginFailure, loginStart, loginSuccess } from './auth.actions';

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
          catchError((error) => {
            console.log(error);
            return EMPTY;
          })
        )
      )
    )
  );
}
