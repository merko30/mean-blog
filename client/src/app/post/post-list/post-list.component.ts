import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Post } from "../../models/post.model";
import * as PostActions from "./../store/post.actions";
import * as fromStore from "../../store/app.reducer";
import { FilterPipe } from "../../shared/filter/filter.pipe";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(new PostActions.LoadPosts());
  }

  ngOnInit() {
    this.posts$ = this.store.select<any>(fromStore.getAllPosts);
  }
}
