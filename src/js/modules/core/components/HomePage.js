import React, { Component } from "react";
import { connect } from "react-redux";
import Fader from "./Fader";
import { delay } from "../utils";
import { transitionRoute } from "../actions";
import { INTRO_DURATION } from "../constants";
import injectSheet from "react-jss";

const styles = {
  homeText: {
    paddingTop: "20px"
  }
};
class HomePage extends Component {
  componentDidMount() {
    delay(INTRO_DURATION).then(() => {
      this.props.transitionRoute("/about");
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Fader>
        <div className={classes.homeText}>Welcome to my website</div>
      </Fader>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});
export default connect(null, mapDispatchToProps)(injectSheet(styles)(HomePage));
