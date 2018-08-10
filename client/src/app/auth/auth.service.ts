import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tokenNotExpired } from "angular2-jwt";
import * as jwt_decode from "jwt-decode";

import { environment } from "./../../environments/environment";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  RegisterUser(user) {
    return this.http.post(environment.apiUrl + "/register", user);
  }

  LoginUser(user) {
    return this.http.post(environment.apiUrl + "/authenticate", user);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("token") && tokenNotExpired("token")) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  getUser(id): Observable<any> {
    return this.http.get(environment.apiUrl + "/users/" + id);
  }

  getCurrentUserId() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      return decoded.id;
    }
  }
}
