import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommentsService } from "./comments.service";
import {
  addComment,
  addCommentSuccess,
  addCommentFailure
} from "./comments.actions";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import Comment from "./comment";

interface CommentResponse {
  comment: Comment;
}

@Injectable()
export class CommentsEffects {
  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}

  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addComment),
      mergeMap(action => {
        return this.commentsService
          .addComment(action.id, action.comment)
          .pipe(
            map(
              ({ comment }: CommentResponse) => addCommentSuccess({ comment }),
              catchError(({ error: { message } }) =>
                of(addCommentFailure({ error: message }))
              )
            )
          );
      })
    )
  );
}
