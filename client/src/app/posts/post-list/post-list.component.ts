import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { loadPosts } from "../posts.actions";
import { Post } from "../post";
import { State } from "src/app/reducers";
import { map, tap, take, takeWhile, takeLast } from "rxjs/operators";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  constructor(private store: Store<State>) {
    this.posts = store.pipe(select(state => state.postsState.posts));
    store
      .pipe(select(state => state.postsState.meta.numberOfPages))
      .subscribe(val => {
        for (let i = 1; i <= val; i++) {
          this.numberOfPages.push(i);
        }
      });
  }

  posts: Observable<Post[]>;
  numberOfPages: any[] = [];

  ngOnInit() {
    this.store.dispatch(loadPosts({}));
  }

  paginate(event) {
    this.store.dispatch(loadPosts({ page: event }));
  }
}
