import { createAction, props } from "@ngrx/store";
import Comment from "./comment";

export const addComment = createAction(
  "[Comments] AddComment",
  props<{ comment: Comment; id: string }>()
);

export const addCommentSuccess = createAction(
  "[Comments] AddCommentSuccess",
  props<{ comment: Comment }>()
);

export const addCommentFailure = createAction(
  "[Comments] AddCommentFailure",
  props<{ error: string }>()
);
