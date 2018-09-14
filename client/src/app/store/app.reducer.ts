import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";

import * as fromRouting from "./routing";
import * as fromAuth from "../auth/store/auth.reducer";
import * as fromPosts from "../post/store/post.reducer";
import * as fromComments from "../post/comments/store/comments.reducer";
import * as fromMessages from "../messages/messages.reducer";

export interface AppState {
  posts: fromPosts.State;
  comments: fromComments.State;
  auth: fromAuth.State;
  messages: fromMessages.State;
  routerReducer: fromRouter.RouterReducerState<fromRouting.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: fromPosts.PostReducer,
  comments: fromComments.CommentReducer,
  auth: fromAuth.authReducer,
  messages: fromMessages.MessagesReducer,
  routerReducer: fromRouter.routerReducer
};

// STATE SELECTORS
export const getPostsState = createFeatureSelector<fromPosts.State>("posts");
export const getCommentsState = createFeatureSelector<fromComments.State>(
  "comments"
);
export const getMessagesState = (state: AppState) => state.messages;

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromRouting.RouterStateUrl>
>("routerReducer");
export const getAuthState = createFeatureSelector<fromAuth.State>("auth");

// ROUTE SELECTORS
export const getParams = createSelector(
  getRouterState,
  state => state.state.params
);

// AUTH SELECTORS
export const getAuthLoading = createSelector(
  getAuthState,
  state => state.loading
);
export const getStatus = createSelector(getAuthState, state => state.loggedIn);
export const getCurrentUser = createSelector(getAuthState, fromAuth.getUser);

//POSTS SELECTOR
export const getPostLoading = createSelector(
  getPostsState,
  fromPosts.selectPostLoading
);
export const getAllPosts = createSelector(getPostsState, fromPosts.getPosts);
export const getSelectedPost = createSelector(
  getAllPosts,
  getRouterState,
  (posts, router) => {
    return posts.find(p => p._id === router.state.params.id);
  }
);

export const getCurrentUserPosts = createSelector(
  getAllPosts,
  getCurrentUser,
  (posts, user) => {
    return posts && user && posts.filter(p => p.author._id === user._id);
  }
);

//COMMENTS SELECTOR
export const getComments = createSelector(
  getCommentsState,
  fromComments.getComments
);
export const getCommentsByPostID = createSelector(
  getSelectedPost,
  getComments,
  (post, comments) => {
    if (post === undefined) return;
    else {
      return comments.filter(comment => comment.postID === post._id);
    }
  }
);

// MESSAGES SELECTORs
export const getMessage = createSelector(
  getMessagesState,
  fromMessages.getMessage
);

export const getClass = createSelector(
  getMessagesState,
  fromMessages.getClassName
);
