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
    const authReq = req.clone({
      setHeaders: { 'Content-Type': 'application/json' },
    });

    const authToken = localStorage.getItem('token');

    console.log('INTERCEPTED');

    if (authToken) {
      authReq.headers.append('Authorization', `Bearer ${authToken}`);
    }

    console.log(authReq.headers);

    return next.handle(authReq);
  }
}
