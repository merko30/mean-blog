import { createReducer, on } from '@ngrx/store';

import {
  createQuestion,
  createQuestionSuccess,
  loadQuestions,
  loadQuestionsSuccess,
} from './question.actions';

import { Question } from './types';

export interface QuestionState {
  questions: Question[];
  loading: Boolean;
  error: String | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

export const questionReducer = createReducer(
  initialState,
  on(loadQuestions, (state) => ({ ...state, loading: true })),
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    loading: false,
    questions,
  })),
  on(createQuestion, (state) => ({ ...state, loading: true })),
  on(createQuestionSuccess, (state, { question }) => ({
    ...state,
    loading: false,
    questions: [...state.questions, question],
  }))
);
