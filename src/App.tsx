import * as React from "react";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
import history from "./tools/history";
import MainApp from "./components/MainApp";
import ReadingListPage from "./components/ReadingListPage";
import Project from "./components/Project";
import { Route } from "react-router";
import {ConnectedRouter} from "connected-react-router";

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
        <MainApp>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/projects/:slug" component={Project} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/reading" component={ReadingListPage} />
          <Route path="/resume" component={ResumePage} />
        </MainApp>
      </ConnectedRouter>
  );
};

export default App;
