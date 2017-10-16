import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import AboutPage from "./core/components/AboutPage";
import BlogPage from "./blog/components/BlogPage";
import HomePage from "./core/components/HomePage";
import ProjectsPage from "./core/components/ProjectsPage";
import ResumePage from "./core/components/ResumePage";
import appHistory from "tools/appHistory";
import MainApp from "./core/components/MainApp";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <MainApp>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/resume" component={ResumePage} />
          </MainApp>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default RoutingApp;
