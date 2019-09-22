import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { Params, RouterStateSnapshot } from "@angular/router";
import {
  StoreRouterConnectingModule,
  RouterReducerState,
  RouterStateSerializer,
  routerReducer
} from "@ngrx/router-store";

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State extends RouterReducerState<RouterStateUrl> {}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const reducer = routerReducer;
