import { createReducer, on } from "@ngrx/store";
import {
  addComment,
  addCommentSuccess,
  addCommentFailure
} from "./comments.actions";

export interface State {
  error: string;
  loading: boolean;
}

const initialState: State = {
  error: null,
  loading: false
};

export const CommentsReducer = createReducer(
  initialState,
  on(addComment, state => ({ ...state, loading: true })),
  on(addCommentSuccess, state => ({ ...state, loading: false })),
  on(addCommentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
