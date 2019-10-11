import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { transitionRoute } from "../duck";

const styles = {
  link: {
    textDecoration: "none"
  }
};

const Link = ({ classes, sheet, children, to, transitionRoute, ...props }) =>
  <a
    href={to}
    onClick={event => {
      event.preventDefault();
      transitionRoute(to);
    }}
    className={classes.link}
    {...props}
  >
    {children}
  </a>;

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Link));
