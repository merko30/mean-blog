import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../reducers";
import { Observable } from "rxjs";
import { logout } from "../auth/auth.actions";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<State>) {
    this.getScreenSize();
    this.loggedIn = store.select(state => state.authState.loggedIn);
  }

  loggedIn: Observable<Boolean>;

  showMenu: Boolean = false;

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.store.dispatch(logout());
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize() {
    if (window.innerWidth > 768) {
      this.showMenu = true;
    } else if (window.innerHeight < 768) {
      this.showMenu = false;
    }
  }
}
