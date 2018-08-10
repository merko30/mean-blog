import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";

import { LoadingComponent } from "../../shared/loading/loading.component";

import * as fromStore from "../../store/app.reducer";
import * as fromActions from "../../auth/store/auth.actions";

import { AuthService } from "../../auth/auth.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  id;
  currentUser: Observable<User>;
  isLoggedIn: Observable<boolean>;

  constructor(
    private store: Store<fromStore.AppState>,
    private authService: AuthService
  ) {
    this.isLoggedIn = this.store.select(fromStore.getStatus);
    this.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn && localStorage.getItem("token")) {
        this.id = this.authService.getCurrentUserId();
        this.store.dispatch(new fromActions.GetUser(this.id));
      }
    });
    this.currentUser = this.store.select(fromStore.getCurrentUser);
  }

  onLogout() {
    this.store.dispatch(new fromActions.Logout());
  }
}
