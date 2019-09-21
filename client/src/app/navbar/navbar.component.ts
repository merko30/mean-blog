import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {
    this.getScreenSize();
  }

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
