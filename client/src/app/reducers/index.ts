import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import { State as PostsState, PostsReducer } from "../posts/posts.reducer";
import { AuthReducer, State as AuthState } from "../auth/auth.reducer";
import { reducer, State as RouterState } from "../router";
import {
  CommentsReducer,
  State as CommentsState
} from "../posts/comments/comments.reducer";

export interface State {
  postsState: PostsState;
  authState: AuthState;
  routerState: RouterState;
  commentsState: CommentsState;
}

export const reducers: ActionReducerMap<State> = {
  postsState: PostsReducer,
  authState: AuthReducer,
  routerState: reducer,
  commentsState: CommentsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
