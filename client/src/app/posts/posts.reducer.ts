import { createReducer, on } from "@ngrx/store";

import Post from "./post";
import {
  loadPosts,
  loadPostsSuccess,
  loadPost,
  loadPostSuccess
} from "./posts.actions";
export interface State {
  posts: Post[];
  post: Post;
  loading: Boolean;
  error: null;
}

const initialState: State = {
  posts: [],
  post: null,
  loading: false,
  error: null
};

export const PostsReducer = createReducer(
  initialState,
  on(loadPosts, state => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    loading: false,
    posts
  })),
  on(loadPost, state => ({ ...state, loading: true })),
  on(loadPostSuccess, (state, { post }) => ({ ...state, loading: false, post }))
);
