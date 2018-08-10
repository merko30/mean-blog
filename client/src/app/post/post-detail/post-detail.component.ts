import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import { AuthService } from "../../auth/auth.service";

import { User } from "../../models/user.model";
import { Post } from "../../models/post.model";
import { Comment } from "../../models/comment.model";

import * as fromStore from "../../store/app.reducer";
import * as PostActions from "../store/post.actions";
import * as CommentActions from "../comments/store/comments.actions";
import * as authActions from "../../auth/store/auth.actions";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit {
  postID: string;
  id: string;
  currentUser: Observable<User>;
  isLoggedIn: Observable<Boolean>;
  post$: Observable<Post>;
  posts$: Observable<Post[]>;
  comments$: Observable<Comment[]>;

  constructor(
    public store: Store<fromStore.AppState>,
    private authService: AuthService
  ) {
    this.store.dispatch(new PostActions.LoadPosts());
    this.store.dispatch(new CommentActions.LoadComments());
    this.isLoggedIn = this.store.select(fromStore.getStatus);
    if (this.isLoggedIn) {
      this.id = this.authService.getCurrentUserId();
      this.store.dispatch(new authActions.GetUser(this.id));
    }
    this.currentUser = this.store.select(fromStore.getCurrentUser);
    this.store.select(fromStore.getParams).subscribe(params => {
      this.postID = params.id;
    });
  }

  ngOnInit() {
    this.post$ = this.store.select(fromStore.getSelectedPost);
    this.comments$ = this.store.select(fromStore.getCommentsByPostID);
  }

  onComment(f) {
    this.store.dispatch(new CommentActions.AddComment(this.postID, f.value));
  }
}
