import { createReducer, on } from "@ngrx/store";

import { Post } from "./post";
import {
  loadPosts,
  loadPostsSuccess,
  loadPost,
  loadPostSuccess,
  addPost,
  addPostSuccess,
  addPostFailure,
  loadPostFailure,
  loadPostsFailure
} from "./posts.actions";
import { addCommentSuccess } from "./comments/comments.actions";
export interface State {
  posts: Post[];
  post: Post;
  loading: Boolean;
  error: String;
}

const initialState: State = {
  posts: [],
  post: null,
  loading: false,
  error: null
};

export const PostsReducer = createReducer(
  initialState,
  on(loadPosts, loadPost, addPost, state => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    loading: false,
    posts
  })),
  on(loadPostSuccess, (state, { post }) => ({
    ...state,
    loading: false,
    post
  })),
  on(addPostSuccess, state => ({ ...state, loading: false })),
  on(addPostFailure, loadPostFailure, loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(addCommentSuccess, (state, { comment }) => ({
    ...state,
    post: { ...state.post, comments: [...state.post.comments, comment] }
  }))
);
