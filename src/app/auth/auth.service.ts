import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<object> {
    return this.http.post('/api/auth/login', JSON.stringify(credentials));
  }

  register(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<object> {
    return this.http.post('/api/auth/register', JSON.stringify(credentials), {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}
