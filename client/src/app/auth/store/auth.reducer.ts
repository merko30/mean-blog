import * as AuthActions from "./auth.actions";
import { User } from "../../models/user.model";

export interface State {
  loading: boolean;
  loggedIn: boolean;
  currentUser: User;
}

const initialState: State = {
  loading: false,
  currentUser: null,
  loggedIn: localStorage.getItem("token") ? true : false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
): State {
  switch (action.type) {
    case AuthActions.REGISTER: {
      return {
        ...state,
        loading: true,
        currentUser: null
      };
    }
    case AuthActions.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null
      };
    }
    case AuthActions.REGISTER_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null
      };
    }
    case AuthActions.LOGIN: {
      return {
        ...state,
        loading: true,
        loggedIn: false,
        currentUser: null
      };
    }
    case AuthActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: null
      };
    }
    case AuthActions.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null
      };
    }
    case AuthActions.LOGOUT: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null
      };
    }
    case AuthActions.GET_USER: {
      return {
        ...state,
        loading: true,
        loggedIn: true,
        currentUser: null
      };
    }
    case AuthActions.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: action.user
      };
    }
    default: {
      return state;
    }
  }
}

export const getStatus = (state: State) => state.loggedIn;
export const getLoading = (state: State) => state.loading;
export const getUser = (state: State) => state.currentUser;
