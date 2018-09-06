import {
  FADE_ROUTE,
  FINISH_FADING_ROUTE,
  REFRESH_WINDOW_DIMENSIONS
} from "./actionTypes";

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
      image: "/images/projects/gsoc.png",
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
      image: "/images/projects/stuyspec.png",
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
      image: "/images/projects/fashion-tree.png",
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

const reducer = (state = { ...initialState }, action) => {
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

export default reducer;
