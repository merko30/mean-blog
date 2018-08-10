import * as actions from "./messages.actions";

export interface State {
  message: String;
  className: String;
}

const initialState: State = {
  message: null,
  className: null
};

export function MessagesReducer(
  state = initialState,
  action: actions.MessagesActions
): State {
  switch (action.type) {
    case actions.SHOW_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
        className: action.className
      };
    }
    case actions.CLEAR_MESSAGE: {
      return {
        ...state,
        message: null,
        className: null
      };
    }
    default:
      return state;
  }
}

export const getMessage = (state: State) => state.message;
export const getClassName = (state: State) => state.className;
