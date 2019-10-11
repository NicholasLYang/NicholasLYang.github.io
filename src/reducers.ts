import { connectRouter } from 'connected-react-router';
import { reducer } from "./duck"
import {combineReducers} from "redux";
import { History } from "history";

const createRootReducer = (history: History<any>) => combineReducers({
  core: reducer,
  router: connectRouter(history)
});

export default createRootReducer;
