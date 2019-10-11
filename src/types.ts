import {RouterState} from "connected-react-router";

interface Link {
  name: string;
  url: string;
}

interface Project {
  name: string;
  slug: string;
  image: string;
  alt: string;
  color: string;
  description: string;
  urls: Array<Link>
}

export interface ReduxState {
  core: CoreState;
  router: RouterState;
}

interface CoreState {
  viewportWidth: number;
  viewportHeight: number
  isFading: boolean;
  projects: Array<Project>
}