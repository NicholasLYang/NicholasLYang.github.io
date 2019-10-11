import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createRootReducer from "./reducers";
import logger from "redux-logger";
import history from "./tools/history";
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from 'redux'

const middleware =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(
        promise,
        thunk,
        routerMiddleware(history) //for intercepting navigation actions
      )
    : composeWithDevTools(
        applyMiddleware(promise, thunk, logger, routerMiddleware(history))
      );

export default createStore(createRootReducer(history), middleware);
