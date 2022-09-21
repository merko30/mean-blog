import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Post } from "./post";
import { Observable, of, EMPTY } from "rxjs";
import { State } from "../reducers";
import { Store } from "@ngrx/store";
import { take, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostDetailResolverService implements Resolve<Post> {
  constructor(private router: Router, private store: Store<State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> | Observable<never> {
    let id = route.paramMap.get("id");

    return this.store
      .select(state => state.postsState.post)
      .pipe(
        take(1),
        mergeMap(post => {
          if (post) {
            return of(post);
          } else {
            // id not found
            this.router.navigate(["/"]);
            return EMPTY;
          }
        })
      );
  }
}
