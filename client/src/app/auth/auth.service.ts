import { Injectable } from "@angular/core";
import { LoginInput, TokenResponse, RegisterInput } from "./user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: RegisterInput) {
    return this.http.post("http://localhost:3000/api/auth/register", user);
  }

  login(user: LoginInput): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(
      "http://localhost:3000/api/auth/login",
      user
    );
  }

  storeToken(token: String) {
    localStorage.setItem("token", `Bearer ${token}`);
  }

  clearToken() {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("token") ? true : false;
  }
}
