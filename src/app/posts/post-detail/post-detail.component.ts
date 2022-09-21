import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "src/app/reducers";
import { loadPost } from "../posts.actions";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../post";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  constructor(
    private store: Store<State>,
    private router: ActivatedRoute,
    private authService: AuthService
  ) {
    this.post = this.store.pipe(select(state => state.postsState.post));
    this.loggedIn = this.store.pipe(select(state => state.authState.loggedIn));
    this.currentUserID = this.authService.getCurrentUserID();
  }

  id: string;
  post: Observable<Post>;
  loggedIn: Observable<Boolean>;
  currentUserID: string;

  ngOnInit() {
    this.router.params.subscribe(params => (this.id = params.id));
    this.store.dispatch(loadPost({ id: this.id }));
  }
}
