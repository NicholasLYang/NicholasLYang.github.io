import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import ReadingListPage from "./ReadingListPage";
import ResumePage from "./ResumePage";
import MainApp from "./MainApp";

function App() {
  return (
    <Router>
      <MainApp>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/reading" component={ReadingListPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </MainApp>
    </Router>
  );
}

export default App;
