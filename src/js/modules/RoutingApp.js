import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import AboutPage from "./core/components/AboutPage";
import ContactPage from "./core/components/ContactPage";
import HomePage from "./core/components/HomePage";
import ProjectsPage from "./core/components/ProjectsPage";
import ResumePage from "./core/components/ResumePage";
import appHistory from "tools/appHistory";
import MainApp from "./core/components/MainApp";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";
import ReadingListPage from './core/components/ReadingListPage'
import Project from './core/components/Project'

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
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
      </Provider>
    );
  }
}

export default RoutingApp;
