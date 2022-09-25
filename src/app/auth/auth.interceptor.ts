// #docplaster
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    let authReq = req.clone();

    if (authToken) {
      authReq.headers.append('Authorization', `Bearer ${authToken}`);
    }

    return next.handle(authReq);
  }
}
