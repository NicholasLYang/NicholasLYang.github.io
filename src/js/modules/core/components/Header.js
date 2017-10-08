import React from "react";
import Link from "./Link"
import { connect } from "react-redux";
import injectSheet from "react-jss";

const styles = {
  mainHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    marginBottom: "2%",
    fontFamily: "'Source Serif Pro', serif"
  },
  routes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    paddingRight: "5%",
    flex: "1 0 auto"
  },
  link: {
    padding: "10px",
    fontSize: "1.45em",
    color: "black"
  },
  masthead: {
    flexGrow: "2",
    fontSize: "4em",
    textDecoration: "none",
    color: "black",
  },
  '@media (max-width: 500px)': {
    masthead: {
      fontSize: "2.5em"
    }
  }
};


const Header = ({ classes }) =>
  <div className={classes.mainHeader}>
    <div>
      <Link to="/">
        <h1 className={classes.masthead}>Nicholas Yang</h1>
      </Link>
    </div>
    <div className={classes.routes}>
      <Link to="/about">
        <div className={classes.link}>About</div>
      </Link>
      <Link to="/projects">
        <div className={classes.link}>Projects</div>
      </Link>
      <Link to="/resume">
        <div className={classes.link}>Resume</div>
      </Link>
    </div>
  </div>;

export default injectSheet(styles)(Header);
