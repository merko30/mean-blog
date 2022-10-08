import { createReducer, on } from '@ngrx/store';

import {
  createAnswerSuccess,
  createAnswer,
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
  answerLoading: Boolean;
  error: String | null;
}

const initialState: QuestionState = {
  questions: [],
  question: null,
  loading: false,
  answerLoading: false,
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
  })),
  on(createAnswer, (state) => ({ ...state, answerLoading: true })),
  on(createAnswerSuccess, (state, { answer }) => ({
    ...state,
    answerLoading: false,
    question: {
      ...state.question!,
      answers: [answer, ...state.question!.answers],
    },
  }))
);
