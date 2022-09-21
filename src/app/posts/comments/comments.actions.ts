import { createAction, props } from "@ngrx/store";
import Comment from "./comment";

export const addComment = createAction(
  "[Comments] AddComment",
  props<{ postID: string; comment: Comment }>()
);

export const addCommentSuccess = createAction(
  "[Comments] AddCommentSuccess",
  props<{ comment: Comment }>()
);

export const addCommentFailure = createAction(
  "[Comments] AddCommentFailure",
  props<{ error: string }>()
);

export const editComment = createAction(
  "[Comments] EditComment",
  props<{ postID: string; commentID: string; comment: Comment }>()
);

export const editCommentSuccess = createAction(
  "[Comments] EditCommentSuccess",
  props<{ comment: Comment }>()
);

export const editCommentFailure = createAction(
  "[Comments] EditCommentFailure",
  props<{ error: string }>()
);
