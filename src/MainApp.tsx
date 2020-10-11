import React from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import MondrianIcon from "./MondrianIcon";
import ReactIcon from "./ReactIcon";

const useStyles = createUseStyles({
  mainWrapper: {
    height: "100vh",
    margin: "0px auto",
    fontFamily: "proxima-nova, sans-serif",
  },
  contentWrapper: {
    maxWidth: "720px",
    minWidth: "360px",
    margin: "0 auto",
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "row",
    fontSize: "1.25em",
    lineHeight: "1.5em",
  },
  appFooter: {
    display: "flex",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5px",
  },
});

const MainApp: React.FC = ({ children }) => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Header isHome={location.pathname === "/"} />
      <div className={classes.mainContent}>{children}</div>
      <div className={classes.appFooter}>
        Made with <ReactIcon /> Inspired by <MondrianIcon />
      </div>
    </div>
  );
};

export default MainApp;
