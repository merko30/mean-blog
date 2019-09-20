import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import { State as PostsState, PostsReducer } from "../posts/posts.reducer";

export interface State {
  postsState: PostsState;
}

export const reducers: ActionReducerMap<State> = {
  postsState: PostsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
