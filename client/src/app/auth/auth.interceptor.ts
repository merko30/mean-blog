import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");

    const clonedrequest = request.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    });

    return next.handle(clonedrequest);
  }
}
