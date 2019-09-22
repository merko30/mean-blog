import { Component, OnInit, HostListener } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../reducers";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<State>) {
    this.getScreenSize();
    this.loggedIn = this.store.select(state => state.authState.loggedIn);
  }

  loggedIn: Observable<Boolean>;
  showMenu: Boolean = false;

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
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
