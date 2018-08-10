import * as fromPost from "./post.actions";
import { Post } from "../../models/post.model";

export interface State {
  posts: Array<Post>;
  loading: boolean;
}

const initialState: State = {
  posts: [],
  loading: false
};

export function PostReducer(
  state = initialState,
  action: fromPost.PostActions
): State {
  switch (action.type) {
    case fromPost.LOAD_POSTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPost.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      };
    }

    case fromPost.UPDATE_POST: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPost.UPDATE_POST_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case fromPost.UPDATE_POST_FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    case fromPost.CREATE_POST: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPost.CREATE_POST_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case fromPost.CREATE_POST_FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const selectPostLoading = (state: State) => state.loading;
export const getPosts = (state: State) => state.posts;
