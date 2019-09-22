import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      const clonedReq = req.clone({
        headers: req.headers.set("Authorization", localStorage.getItem("token"))
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }
}
