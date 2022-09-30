import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from './types';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<{ questions: Question[] }> {
    return this.http.get<{ questions: Question[] }>('/api/questions');
  }

  create(body: Question): Observable<{ question: Question }> {
    return this.http.post<{ question: Question }>(
      '/api/questions',
      JSON.stringify(body)
    );
  }
}
