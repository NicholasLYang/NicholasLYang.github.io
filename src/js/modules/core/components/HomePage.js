import React, { Component } from "react";
import { connect } from "react-redux";
import Fader from "./Fader";
import { delay } from "../utils";
import { transitionRoute } from "../actions";
import { INTRO_DURATION } from "../constants";

class HomePage extends Component {
  componentDidMount() {
    delay(INTRO_DURATION).then(() => {
      this.props.transitionRoute("/about")
    });
  }
  render() {
    return (
      <Fader>
        <div>Welcome to my website</div>
      </Fader>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});
export default connect(null, mapDispatchToProps)(HomePage);
