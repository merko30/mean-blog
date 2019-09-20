import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";

import { PostsService } from "./posts.service";
import Post from "./post";

import {
  loadPosts,
  loadPostsSuccess,
  loadPost,
  loadPostSuccess
} from "./posts.actions";

interface PostsResponse {
  posts: Post[];
}

interface PostResponse {
  post: Post;
}

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postService: PostsService) {}

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
}
