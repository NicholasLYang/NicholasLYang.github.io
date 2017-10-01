import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import AboutPage from "./core/components/AboutPage";
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
            <Route path="/about" component={AboutPage} />
          </MainApp>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default RoutingApp;
