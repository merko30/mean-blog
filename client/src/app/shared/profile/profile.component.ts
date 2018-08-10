import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromStore from "../../store/app.reducer";
import * as PostActions from "../../post/store/post.actions";
import { User } from "../../models/user.model";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(new PostActions.LoadPosts());
    this.currentUser = this.store.select(fromStore.getCurrentUser);
  }

  currentUser: Observable<User>;
  posts: Observable<Post[]>;
  editLink: Boolean = true;

  ngOnInit() {
    this.posts = this.store.select(fromStore.getCurrentUserPosts);
  }
}
