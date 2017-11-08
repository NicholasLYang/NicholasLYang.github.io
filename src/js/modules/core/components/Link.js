import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { transitionRoute } from "../actions";

const styles = {
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "black"
    }
  }
};

const Link = ({ classes, children, to, transitionRoute }) =>
  <a
    href={to}
    onClick={event => {
      event.preventDefault();
      transitionRoute(to);
    }}
    className={classes.link}
  >
    {children}
  </a>;

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Link));
