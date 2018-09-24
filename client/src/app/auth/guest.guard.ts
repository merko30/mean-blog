import { Router, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import * as fromStore from "../store/app.reducer";
import { Store } from "@ngrx/store";

@Injectable()
export class GuestGuard implements CanActivate {
  isAuthenticated: Boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {}

  canActivate() {
    this.store.select(fromStore.getStatus).subscribe(loggedIn => {
      if (!loggedIn) {
        return true;
      }
    });
    this.router.navigate(["/"]);
    return false;
  }
}
