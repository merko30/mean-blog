import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tokenNotExpired } from "angular2-jwt";

import * as fromStore from "../store/app.reducer";

import { environment } from "./../../environments/environment";

import { JwtHelper } from "angular2-jwt";
import { Store } from "@ngrx/store";

const helper = new JwtHelper();

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store<fromStore.AppState>
  ) {}

  RegisterUser(user) {
    return this.http.post(environment.apiUrl + "/register", user);
  }

  LoginUser(user) {
    return this.http.post(environment.apiUrl + "/authenticate", user);
  }

  isAuthenticated() {
    this.store.select(fromStore.getStatus).subscribe(loggedIn => {
      if (loggedIn) {
        return true;
      } else {
        return false;
      }
    });
  }

  logout() {
    localStorage.clear();
  }

  getCurrentUserId() {
    if (localStorage.getItem("token")) {
      const decodedToken = helper.decodeToken(localStorage.getItem("token"));
      return decodedToken._id;
    }
  }

  getUser(id): Observable<any> {
    return this.http.get(environment.apiUrl + "/users/" + id);
  }
}
