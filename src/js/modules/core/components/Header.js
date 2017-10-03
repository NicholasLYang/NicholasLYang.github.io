import React from "react";
import { transitionRoute } from "../actions";
import { connect } from "react-redux";
import injectSheet from "react-jss";

const styles = {
  mainHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    fontFamily: "'Cormorant Garamond', serif"
  },
  headerLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "center",
    flex: "1 0 auto"
  },
  headerLink: {
    padding: "10px",
    textDecoration: "none",
    color: "grey"
  },
  headerText: {
    flexGrow: "2",
  }
};

const HeaderLink = ({ classes, children, to, transitionRoute }) =>
  <a
    href={to}
    onClick={event => {
      event.preventDefault();
      transitionRoute(to);
    }}
    className={classes.headerLink}
  >
    {children}
  </a>;

const Header = ({ classes, transitionRoute }) =>
  <div className={classes.mainHeader}>
    <h1 onClick={() => transitionRoute("/")} className={classes.headerText}>
      Nicholas Yang
    </h1>
    <div className={classes.headerLinks}>
      <HeaderLink
        transitionRoute={transitionRoute}
        classes={classes}
        to="/about"
      >
        About
      </HeaderLink>
      <HeaderLink
        transitionRoute={transitionRoute}
        classes={classes}
        to="/projects"
      >
        Projects
      </HeaderLink>
      <HeaderLink
        transitionRoute={transitionRoute}
        classes={classes}
        to="/resume"
      >
        Resume
      </HeaderLink>
    </div>
  </div>;

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Header));
