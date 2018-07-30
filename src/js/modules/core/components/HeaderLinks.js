import React from "react";
import Link from "./Link";
import injectSheet from "react-jss";

const styles = {
  routes: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "baseline",
    justifyContent: "flex-end",
    flex: "1 0 auto",
    flexWrap: "wrap",
    fontVariant: "small-caps"
  },
  link: {
    padding: "10px",
    fontSize: "1.45em",
    color: "black"
  }
};

const HeaderLinks = ({ classes }) => {
  return (
    <div className={classes.routes}>
      <Link to="/about">
        <div className={classes.link}>About</div>
      </Link>
      <Link to="/contact">
        <div className={classes.link}>Contact</div>
      </Link>
      <Link to="/projects">
        <div className={classes.link}>Projects</div>
      </Link>
      <Link to="/reading">
        <div className={classes.link}>Reading List</div>
      </Link>
      <Link to="/resume">
        <div className={classes.link}>Resume</div>
      </Link>
    </div>
  );
};

export default injectSheet(styles)(HeaderLinks);
