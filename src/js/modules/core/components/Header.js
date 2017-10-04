import React from "react";
import Link from "./Link"
import { connect } from "react-redux";
import injectSheet from "react-jss";

const styles = {
  mainHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "top",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    fontFamily: "'Source Serif Pro', serif"
  },
  headerLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    paddingRight: "5%",
    flex: "1 0 auto"
  },
  headerLink: {
    padding: "10px",
    fontSize: "1.45em",
    color: "grey"
  },
  headerText: {
    flexGrow: "2",
    fontSize: "4em",
    textDecoration: "none",
    color: "black",
  },
  '@media (max-width: 500px)': {
    headerText: {
      fontSize: "2.5em"
    }
  }
};


const Header = ({ classes }) =>
  <div className={classes.mainHeader}>
    <Link to="/">
      <h1 className={classes.headerText}>Nicholas Yang</h1>
    </Link>
    <div className={classes.headerLinks}>
      <Link to="/about">
        <div className={classes.headerLink}>About</div>
      </Link>
      <Link className={classes.headerLink} to="/projects">
        <div className={classes.headerLink}>Projects</div>
      </Link>
      <Link className={classes.headerLink} to="/resume">
        <div className={classes.headerLink}>Resume</div>
      </Link>
    </div>
  </div>;

export default injectSheet(styles)(Header);
