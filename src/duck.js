import { push } from "connected-react-router";
import { FADE_DURATION } from "./constants";
import { delay } from "./utils";
import gsoc from "./images/projects/gsoc.png";
import stuyspec from "./images/projects/stuyspec.png"
import fashionTree from "./images/projects/fashion-tree.png"

export const FADE_ROUTE = "core/FADE_ROUTE";
export const FINISH_FADING_ROUTE = "core/FINISH_FADING_ROUTE";
export const REFRESH_WINDOW_DIMENSIONS = "core/REFRESH_WINDOW_DIMENSIONS";

export const transitionRoute = route => (dispatch, getState) => {
  if (getState().router.location.pathname !== route) {
    const TRANSITION_PADDING = 100;
    dispatch({
      type: FADE_ROUTE
    });
    delay(FADE_DURATION + TRANSITION_PADDING).then(() => {
      dispatch({
        type: FINISH_FADING_ROUTE
      });
      dispatch(push(route));
    });
  }
};

export const refreshWindowDimensions = () => ({
  type: REFRESH_WINDOW_DIMENSIONS,
  payload: {}
});


// getWindowWidth & getWindowHeight was
// adapted from http://stackoverflow.com/a/8876069/1291659
const getViewportWidth = () => {
  return Math.max(
    window.document.documentElement.clientWidth,
    window.innerWidth || 0
  );
};

const getViewportHeight = () => {
  return Math.max(
    window.document.documentElement.clientHeight,
    window.innerHeight || 0
  );
};

const initialState = {
  viewportWidth: getViewportWidth(),
  viewportHeight: getViewportHeight(),
  isFading: false,
  projects: {
    "gsoc-2018": {
      name: "Google Summer of Code 2018",
      slug: "gsoc-2018",
      image: gsoc,
      alt: "Google Summer of Code logo of an HTML tag inside a sun",
      color: "#f15025",
      description: "Added type annotations to Ruby interpreter. Read, mapped and attempted to "+
      "understand 11k+ LOC parser. Used Bison, C and some Ruby.",
      urls: [
        {
          name: "Blog Post",
          url: "https://horriblyunderqualified.com/posts/gsoc-ruby-2018/"
        },
        {
          name: "GitHub Fork",
          url: "https://github.com/nicholaslyang/ruby/tree/type-annotations"
        }
      ]
    },
    stuyspec: {
      name: "The Stuyvesant Spectator",
      slug: "stuyspec",
      image: stuyspec,
      alt: "Stuyvesant Spectator home page with various news articles",
      color: "#A1D2CE",
      description:
        "Designed, implemented and deployed a new website for the Stuyvesant " +
        "Spectator. Included a front end application written in React, an "+
        "GraphQL API written in Rails and a command line uploader written in Go. "+
        "Supervised and trained a team of 5 developers, teaching all of "+
        "them the necessary technologies as well as modern software development "+
        "techniques. Code reviewed over 10k lines of code. Deployed site on " +
        "AWS with a CircleCI pipeline.",
      urls: [
        {
          name: "The Spectator",
          url: "https://stuyspec.com"
        },
        {
          name: "GitHub Org",
          url: "https://github.com/stuyspec"
        }
      ]
    },
    "fashion-tree": {
      name: "Fashion Tree",
      slug: "fashion-tree",
      image: fashionTree,
      alt: "Fashion Tree home page. A grid of clothing options with scores",
      color: "#78CAD2",
      description:
        "A website that helps find eco friendly clothing. " +
        "Scrapes online clothing stores and gives each piece of clothing an" +
        " ecological rank based on material composition. Built using Ruby on "+
        "Rails. Won Sustainability and Social Impact prize at HackNYU 2017",
      urls: [
        {
          name: "GitHub Repo",
          url: "https://github.com/nicholaslyang/fashion-tree"
        }
      ]
    },
  }
};

export const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FADE_ROUTE:
      return { ...state, isFading: true };
    case FINISH_FADING_ROUTE:
      return { ...state, isFading: false };
    case REFRESH_WINDOW_DIMENSIONS:
      let viewportWidth = getViewportWidth(),
        viewportHeight = getViewportHeight();

      if (
        state.viewportWidth !== viewportWidth ||
        state.viewportHeight !== viewportHeight
      ) {
        // override width/height which will refresh app view
        return Object.assign({ ...state }, { viewportWidth, viewportHeight });
      } else return state; //otherwise do not mutate
    default:
      break;
  }

  return state;
};

