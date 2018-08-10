import { FADE_ROUTE, FINISH_FADING_ROUTE } from "./actionTypes";

const initialState = {
  isFading: false,
  projects: {
    "gsoc-2018": {
      name: "Google Summer of Code 2018",
      slug: "gsoc-2018",
      image: "/images/projects/gsoc.png",
      color: "#f15025"
    },
    stuyspec: {
      name: "The Stuyvesant Spectator",
      slug: "stuyspec",
      image: "/images/projects/stuyspec.png",
      color: "#A1D2CE"
    },
    "fashion-tree": {
      name: "Fashion Tree",
      slug: "fashion-tree",
      image: "/images/projects/fashion-tree.png",
      color: "#78CAD2"
    }
  }
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FADE_ROUTE:
      return { ...state, isFading: true };
    case FINISH_FADING_ROUTE:
      return { ...state, isFading: false };
    default:
      break;
  }

  return state;
};

export default reducer;
