import { Action } from "@ngrx/store";

import { Post } from "../../models/post.model";

export const LOAD_POSTS = "[Posts] LoadPosts";
export const LOAD_POSTS_SUCCESS = "[Posts] LoadPostsSuccess";
export const CREATE_POST = "[Post] Create";
export const CREATE_POST_SUCCESS = "[Post] CreatePostSuccess";
export const CREATE_POST_FAILED = "[Post] CreatePostFailed";
export const UPDATE_POST = "[Post] Update";
export const UPDATE_POST_SUCCESS = "[Post] UpdatePostSuccess";
export const UPDATE_POST_FAILED = "[Post] UpdatePostFailed";

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class CreatePost implements Action {
  readonly type = CREATE_POST;

  constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
  readonly type = CREATE_POST_SUCCESS;

  constructor(public payload) {}
}

export class CreatePostFailed implements Action {
  readonly type = CREATE_POST_FAILED;

  constructor(public payload) {}
}

export class UpdatePost implements Action {
  readonly type = UPDATE_POST;

  constructor(public id: string, public payload: Post) {}
}

export class UpdatePostSuccess implements Action {
  readonly type = UPDATE_POST_SUCCESS;

  constructor(public payload) {}
}

export class UpdatePostFailed implements Action {
  readonly type = UPDATE_POST_FAILED;

  constructor(public payload) {}
}

export type PostActions =
  | LoadPosts
  | LoadPostsSuccess
  | CreatePost
  | CreatePostSuccess
  | CreatePostFailed
  | UpdatePost
  | UpdatePostSuccess
  | UpdatePostFailed;
