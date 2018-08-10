import { Observable } from "rxjs/Observable";

import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Router, Params } from "@angular/router";
import { Location } from "@angular/common";

import { tap, map, catchError } from "rxjs/operators";

import * as fromActions from "./routing.actions";

@Injectable()
export class RoutingEffects {
  constructor(
    private actions$: Actions,
    private location: Location,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(fromActions.GO).pipe(
    map((action: fromActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .ofType(fromActions.BACK)
    .pipe(tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .ofType(fromActions.FORWARD)
    .pipe(tap(() => this.location.forward()));
}
