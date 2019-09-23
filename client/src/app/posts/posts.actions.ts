import { createAction, props } from "@ngrx/store";
import { Post, PostInput } from "./post";

export const loadPosts = createAction("[Posts] Load posts");

export const loadPostsSuccess = createAction(
  "[Posts] Load posts success",
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  "[Posts] LoadPostsFailure",
  props<{ error: String }>()
);

export const loadPost = createAction(
  "[Posts] LoadPost",
  props<{ id: String }>()
);

export const loadPostSuccess = createAction(
  "[Posts] LoadPostSuccess",
  props<{ post: Post }>()
);

export const loadPostFailure = createAction(
  "[Posts] LoadPostFailure",
  props<{ error: string }>()
);

export const addPost = createAction(
  "[Posts] AddPost",
  props<{ post: PostInput }>()
);

export const addPostSuccess = createAction(
  "[Posts] AddPostSuccess",
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  "[Posts] AddPostFailure",
  props<{ error: String }>()
);

export const editPost = createAction(
  "[Posts] EditPost",
  props<{ post: Post }>()
);

export const editPostSuccess = createAction(
  "[Posts] EditPostSuccess",
  props<{ post: Post }>()
);

export const editPostFailure = createAction(
  "[Posts] EditPostFailure",
  props<{ error: String }>()
);
