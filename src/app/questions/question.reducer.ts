import { createReducer, on } from '@ngrx/store';

import {
  createQuestion,
  createQuestionSuccess,
  loadQuestion,
  loadQuestions,
  loadQuestionsSuccess,
  loadQuestionSuccess,
} from './question.actions';

import { Question } from './types';

export interface QuestionState {
  questions: Question[];
  question: Question | null;
  loading: Boolean;
  error: String | null;
}

const initialState: QuestionState = {
  questions: [],
  question: null,
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
  })),
  on(loadQuestion, (state) => ({ ...state, loading: true })),
  on(loadQuestionSuccess, (state, { question }) => ({
    ...state,
    loading: false,
    question,
  }))
);
