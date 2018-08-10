import { Action } from "@ngrx/store";

export const SHOW_MESSAGE = "[Messages] ShowMessage";
export const CLEAR_MESSAGE = "[Messages] ClearMessage";

export class ShowMessage implements Action {
  readonly type = SHOW_MESSAGE;

  constructor(public payload, public className) {}
}

export class ClearMessage implements Action {
  readonly type = CLEAR_MESSAGE;

  constructor() {}
}

export type MessagesActions = ShowMessage | ClearMessage;
