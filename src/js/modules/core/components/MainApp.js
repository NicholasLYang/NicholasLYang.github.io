import React, { PureComponent } from "react";
import connect from "react-redux/lib/connect/connect";
import { refreshWindowDimensions } from "./../actions";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Link from './Link'

const styles = {
  mainWrapper: {
    minHeight: "100%",
    margin: "0px auto"
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
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: "1.25em",
    lineHeight: "1.5em"
  },
  appFooter: {
    height: "40px",
    textAlign: "center"
  },
};

class MainApp extends PureComponent {
  render() {
    const { classes, location } = this.props;
    console.log(location);
    return (
      <div>
        <div className={classes.mainWrapper}>
          <Header isHome={location === "/"}/>
          <div className={classes.mainContent}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const VisibleMainApp = connect(
  state => ({
    location: state.router.location.pathname
  }),
  dispatch => ({
    onResizeWindow: () => {
      dispatch(refreshWindowDimensions());
    }
  })
)(injectSheet(styles)(MainApp));

export default withRouter(VisibleMainApp);
