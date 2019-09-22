import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError, tap } from "rxjs/operators";

import { PostsService } from "./posts.service";
import { Post, PostInput } from "./post";

import {
  loadPosts,
  loadPostsSuccess,
  loadPost,
  loadPostSuccess,
  addPost,
  addPostSuccess,
  addPostFailure
} from "./posts.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

interface PostsResponse {
  posts: Post[];
}

interface PostResponse {
  post: Post;
}

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postService: PostsService,
    private router: Router
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts.type),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map(({ posts }: PostsResponse) => {
            return loadPostsSuccess({ posts });
          })
        )
      )
    )
  );

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPost),
      mergeMap(action =>
        this.postService
          .getPost(action.id)
          .pipe(map(({ post }: PostResponse) => loadPostSuccess({ post })))
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      mergeMap(action =>
        this.postService.addPost(action.post).pipe(
          map(({ post }: PostResponse) => addPostSuccess({ post })),
          catchError(({ error: { message } }) =>
            of(addPostFailure({ error: message }))
          )
        )
      )
    )
  );

  afterAddPost$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addPostSuccess),
        tap(action => this.router.navigate([`posts/${action.post._id}`]))
      ),
    {
      dispatch: false
    }
  );
}
