import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question, Answer } from './types';

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

  getSingle(id: number): Observable<{ question: Question }> {
    return this.http.get<{ question: Question }>(`/api/questions/${id}`);
  }

  createAnswer(answer: Partial<Answer>): Observable<{ answer: Answer }> {
    console.log(answer);

    return this.http.post<{ answer: Answer }>(
      `/api/questions/${answer.questionId}/answers`,
      JSON.stringify(answer)
    );
  }
}
