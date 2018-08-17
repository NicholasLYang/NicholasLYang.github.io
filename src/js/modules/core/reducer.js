import { FADE_ROUTE, FINISH_FADING_ROUTE } from "./actionTypes";

const initialState = {
  isFading: false,
  projects: {
    "gsoc-2018": {
      name: "Google Summer of Code 2018",
      slug: "gsoc-2018",
      image: "/images/projects/gsoc.png",
      color: "#f15025",
      description: "Added type annotations to Ruby interpreter. "
    },
    stuyspec: {
      name: "The Stuyvesant Spectator",
      slug: "stuyspec",
      image: "/images/projects/stuyspec.png",
      color: "#A1D2CE",
      description:
        "Designed, implemented and deployed a new website for the Stuyvesant "+
        "Spectator, using React, Redux, Ruby on Rails and Go. Deployed site on "+
        "AWS with a CircleCI pipeline."
    },
    "fashion-tree": {
      name: "Fashion Tree",
      slug: "fashion-tree",
      image: "/images/projects/fashion-tree.png",
      color: "#78CAD2",
      description: "A website that helps find eco friendly clothing. "+
      "Scrapes online clothing stores and gives each piece of clothing an"+
      " ecological rank based on material composition. Built using Ruby on Rails."
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
