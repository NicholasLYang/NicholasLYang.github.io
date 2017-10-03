import * as t from "./actionTypes";
import { push } from "connected-react-router";
import { FADE_DURATION } from "./constants";
import { delay } from "./utils";

export const refreshWindowDimensions = () => ({
  type: t.REFRESH_WINDOW_DIMENSIONS,
  payload: {}
});

export const transitionRoute = route => (dispatch, getState) => {
  if (getState().router.location.pathname !== route) {
    const TRANSITION_PADDING = 100;
    dispatch({
      type: t.FADE_ROUTE
    });
    delay(FADE_DURATION + TRANSITION_PADDING).then(() => {
      dispatch({
        type: t.FINISH_FADING_ROUTE
      })
      dispatch(push(route));
    });
  }
};
