import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";
import reducers from "./reducers";
import { storeUser } from "./middleware";
import {
  routerReducer,
  connectRouter,
  push,
  routerMiddleware
} from "connected-react-router";
import history from "./MyHistory";
import { reducer as notifications } from "react-notification-system-redux";

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
  notifications: notifications
});

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
  applyMiddleware(ReduxThunk, storeUser, routerMiddleware(history)),
  devTools
);

const store = createStore(connectRouter(history)(reducer), enhancer);

export default store;
