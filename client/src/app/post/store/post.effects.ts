import { Injectable } from "@angular/core";

import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";

import { Observable } from "rxjs/Observable";
import { switchMap, map, mergeMap, debounceTime, tap } from "rxjs/operators";
import "rxjs/add/observable/of";

import { PostService } from "../post.service";

import * as PostActions from "./post.actions";
import * as RouterActions from "../../store/routing.actions";
import * as MessageActions from "../../messages/messages.actions";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$
    .ofType(PostActions.LOAD_POSTS)
    .pipe(
      switchMap((action: PostActions.LoadPosts) => {
        return this.postService.getPosts();
      })
    )
    .pipe(
      map(posts => ({ type: PostActions.LOAD_POSTS_SUCCESS, payload: posts }))
    );

  @Effect()
  createPost$: Observable<Action> = this.actions$
    .ofType(PostActions.CREATE_POST)
    .pipe(
      map((action: PostActions.CreatePost) => action.payload),
      switchMap(post => {
        return this.postService.addPost(post);
      })
    )
    .pipe(
      map(res => ({
        type: PostActions.CREATE_POST_SUCCESS,
        payload: res
      }))
    );

  @Effect()
  editPost$: Observable<Action> = this.actions$
    .ofType(PostActions.UPDATE_POST)
    .pipe(
      switchMap((action: PostActions.UpdatePost) => {
        return this.postService.editPost(action.id, action.payload);
      })
    )
    .pipe(
      map(response => ({
        type: PostActions.UPDATE_POST_SUCCESS,
        payload: response
      }))
    );

  @Effect()
  showSuccessMessage$: Observable<Action> = this.actions$
    .ofType(PostActions.CREATE_POST_SUCCESS, PostActions.UPDATE_POST_SUCCESS)
    .pipe(
      map(
        (
          action: PostActions.CreatePostSuccess | PostActions.UpdatePostSuccess
        ) =>
          new MessageActions.ShowMessage(action.payload, "alert alert-success")
      )
    );

  @Effect()
  updatePostSuccess$: Observable<Action> = this.actions$
    .ofType(PostActions.UPDATE_POST_SUCCESS, PostActions.CREATE_POST_SUCCESS)
    .pipe(
      debounceTime(3000),
      mergeMap(
        (
          action: PostActions.CreatePostSuccess | PostActions.UpdatePostSuccess
        ) => [
          new RouterActions.Go({ path: ["/posts"] }),
          new MessageActions.ClearMessage()
        ]
      )
    );
}
