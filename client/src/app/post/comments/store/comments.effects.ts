import { Injectable } from "@angular/core";

import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";

import { Observable } from "rxjs/Observable";
import { map, concatMap } from "rxjs/operators";

import { PostService } from "./../../post.service";
import * as commentActions from "./comments.actions";

@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  @Effect()
  loadComments$: Observable<Action> = this.actions$
    .ofType(commentActions.LOAD_COMMENTS)
    .pipe(
      concatMap((action: commentActions.LoadComments) => {
        return this.postService.getComments();
      })
    )
    .pipe(
      map(comments => ({
        type: commentActions.LOAD_COMMENTS_SUCCESS,
        payload: comments
      }))
    );

  @Effect()
  addComment$: Observable<Action> = this.actions$
    .ofType(commentActions.ADD_COMMENT)
    .pipe(
      concatMap((action: commentActions.AddComment) => {
        return this.postService.addComment(action.PostID, action.payload);
      })
    )
    .pipe(
      map(addedComment => ({
        type: commentActions.ADD_COMMENT_SUCCESS,
        payload: addedComment
      }))
    );

  @Effect()
  addCommentSuccess$: Observable<Action> = this.actions$
    .ofType(commentActions.ADD_COMMENT_SUCCESS)
    .pipe(
      map(action => {
        return new commentActions.LoadComments();
      })
    );
}
