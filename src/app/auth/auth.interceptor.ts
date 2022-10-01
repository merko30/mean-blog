// #docplaster
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(authToken
        ? {
            Authorization: `Bearer ${authToken}`,
          }
        : {}),
    });

    const authReq = req.clone({ headers });

    return next.handle(authReq);
  }
}
