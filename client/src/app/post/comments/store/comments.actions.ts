import { Action } from "@ngrx/store";

import { Comment } from "../../../models/comment.model";

export const LOAD_COMMENTS = "[Comments] LoadComments";
export const LOAD_COMMENTS_SUCCESS = "[Comments] LoadCommentsSuccess";
export const ADD_COMMENT = "[Comments] Add";
export const ADD_COMMENT_SUCCESS = "[Comments] AddCommentSuccess";
export const ADD_COMMENT_FAILED = "[Comments] AddCommentFailed";

export class LoadComments implements Action {
  readonly type = LOAD_COMMENTS;
}

export class LoadCommentsSuccess implements Action {
  readonly type = LOAD_COMMENTS_SUCCESS;

  constructor(public payload: Comment[]) {}
}

export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public PostID: string, public payload: Comment) {}
}

export class AddCommentSuccess implements Action {
  readonly type = ADD_COMMENT_SUCCESS;

  constructor(public payload) {}
}

export class AddCommentFailed implements Action {
  readonly type = ADD_COMMENT_FAILED;

  constructor(public payload) {}
}

export type CommentActions =
  | LoadComments
  | LoadCommentsSuccess
  | AddComment
  | AddCommentSuccess
  | AddCommentFailed;
