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

export interface State {
  postsState: PostsState;
  authState: AuthState;
  routerState: RouterState;
}

export const reducers: ActionReducerMap<State> = {
  postsState: PostsReducer,
  authState: AuthReducer,
  routerState: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
