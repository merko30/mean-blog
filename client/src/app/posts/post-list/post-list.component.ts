import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { State } from "src/app/reducers";
import { loadPosts } from "../posts.actions";
import Post from "../post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  constructor(private store: Store<State>) {
    this.posts = store.pipe(select(state => state.postsState.posts));
  }

  posts: Observable<Post[]>;

  ngOnInit() {
    this.store.dispatch(loadPosts());
  }
}
