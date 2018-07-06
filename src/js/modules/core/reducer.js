import {
  FADE_ROUTE,
  FINISH_FADING_ROUTE
} from "./actionTypes";

const initialState = {
  isFading: false,
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FADE_ROUTE:
      return { ...state, isFading: true }
    case FINISH_FADING_ROUTE:
      return { ...state, isFading: false }
    default:
      break;
  }

  return state;
};

export default reducer;
