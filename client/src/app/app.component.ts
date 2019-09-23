import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";
import { setStatus, logout } from "./auth/auth.actions";
import { Observable } from "rxjs";
import { State } from "./reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<State>) {
    this.loggedIn = this.store.select(state => state.authState.loggedIn);
  }

  loggedIn: Observable<Boolean>;

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.store.dispatch(setStatus({ status: true }));
    }
  }
}
