import * as fromComments from "./comments.actions";
import { Comment } from "../../../models/comment.model";

export interface State {
  comments: Array<Comment>;
  message: String;
  loading: boolean;
}

const initialState: State = {
  comments: [],
  message: null,
  loading: false
};

export function CommentReducer(
  state = initialState,
  action: fromComments.CommentActions
): State {
  switch (action.type) {
    case fromComments.LOAD_COMMENTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromComments.LOAD_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: action.payload,
        loading: false
      };
    }
    case fromComments.ADD_COMMENT: {
      return {
        ...state,
        loading: true
      };
    }
    case fromComments.ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case fromComments.ADD_COMMENT_FAILED: {
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
}

export const getComments = (state: State) => state.comments;
