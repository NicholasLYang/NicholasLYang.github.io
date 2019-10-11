import React, { useEffect } from "react";
import withStyles, {WithStyles} from "react-jss";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Header from "./Header";
import MondrianIcon from "./MondrianIcon";
import ReactIcon from "./ReactIcon";
import { refreshWindowDimensions } from "../duck";
import { useDispatch, useSelector } from "react-redux";
import {ReduxState} from "../types";
import {StaticContext} from "react-router";

const styles = {
  mainWrapper: {
    minHeight: "100%",
    margin: "0px auto",
    fontFamily: "proxima-nova, sans-serif"
  },
  contentWrapper: {
    maxWidth: "720px",
    minWidth: "360px",
    margin: "0 auto"
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "row",
    fontSize: "1.25em",
    lineHeight: "1.5em"
  },
  appFooter: {
    display: "flex",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5px"
  }
};

type Props = WithStyles<typeof styles>

const MainApp: React.FC<Props & RouteComponentProps<any, StaticContext, any>> = ({ classes, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onResizeWindow = () => {
      dispatch(refreshWindowDimensions());
    };
    window.addEventListener("resize", onResizeWindow);
    return () => {
      window.removeEventListener("resize", onResizeWindow);
    };
  }, [dispatch]);
  const location = useSelector((state: ReduxState) => state.router.location.pathname);
  return (
    <div>
      <div className={classes.mainWrapper}>
        <Header isHome={location === "/"} />
        <div className={classes.mainContent}>{children}</div>
        <div className={classes.appFooter}>
          Made with <ReactIcon /> Inspired by <MondrianIcon />
        </div>
      </div>
    </div>
  );
};

const MainAppWithRouter = withRouter(MainApp) as React.ComponentClass<Props>;

export default withStyles(styles)(MainAppWithRouter);
