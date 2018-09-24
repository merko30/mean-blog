import { Observable } from "rxjs/Observable";
import { Router, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";

import * as fromStore from "../store/app.reducer";

@Injectable()
export class AuthGuard implements CanActivate {
  isAuthenticated: Boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {
    this.store.select(fromStore.getStatus).subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  canActivate() {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
