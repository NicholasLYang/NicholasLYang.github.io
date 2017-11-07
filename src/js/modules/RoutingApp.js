import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import AboutPage from "./core/components/AboutPage";
import BlogPage from "./blog/components/BlogPage";
import ContactPage from "./core/components/ContactPage";
import HomePage from "./core/components/HomePage";
import ProjectsPage from "./core/components/ProjectsPage";
import ResumePage from "./core/components/ResumePage";
import appHistory from "tools/appHistory";
import Article from "./blog/components/Article";
import MainApp from "./core/components/MainApp";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import store from "../store";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache()
});
class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ConnectedRouter history={appHistory}>
            <MainApp>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/blog/:id?" component={BlogPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/resume" component={ResumePage} />
            </MainApp>
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default RoutingApp;
