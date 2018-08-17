import React, { PureComponent } from "react";
import connect from "react-redux/lib/connect/connect";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import MondrianIcon from "./MondrianIcon"
import ReactIcon from './ReactIcon'

const styles = {
  mainWrapper: {
    minHeight: "100%",
    margin: "0px auto",
    fontFamily: "proxima-nova, sans-serif",
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
  },
};

class MainApp extends PureComponent {
  render() {
    const { classes, location } = this.props;
    return (
      <div>
        <div className={classes.mainWrapper}>
          <Header isHome={location === "/"}/>
          <div className={classes.mainContent}>{this.props.children}</div>
          <div className={classes.appFooter}> Made with <ReactIcon/> Inspired by <MondrianIcon /></div>
        </div>
      </div>
    );
  }
}

const VisibleMainApp = connect(
  state => ({
    location: state.router.location.pathname
  }),
  null
)(injectSheet(styles)(MainApp));

export default withRouter(VisibleMainApp);
