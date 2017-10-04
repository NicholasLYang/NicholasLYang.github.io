import React, { PureComponent } from "react";
import connect from "react-redux/lib/connect/connect";
import { refreshWindowDimensions } from "./../actions";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import Header from "./Header";

const styles = {
  mainWrapper: {
    minHeight: "100%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto"
  },
  contentWrapper: {
    maxWidth: "720px",
    minWidth: "360px",
    margin: "0 auto"
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    fontFamily: "'Proza Libre', sans-serif",
    fontSize: "1.25em",
    lineHeight: "1.5em"
  },
  mainContent: {
    flex: "4 0 auto"
  },
  appFooter: {
    height: "40px",
    textAlign: "center"
  }
};

class MainApp extends PureComponent {
  onResizeWindow = () => {
    this.props.onResizeWindow();
  };
  componentDidMount() {
    window.addEventListener("resize", this.onResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainWrapper}>
        <Header />
        <div className={classes.mainContent}>
          <div className={classes.mainContainer}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const VisibleMainApp = connect(
  (state, ownProps) => ({
    viewportWidth: state.core.viewportWidth,
    viewportHeight: state.core.viewportHeight
  }),
  dispatch => ({
    onResizeWindow: () => {
      dispatch(refreshWindowDimensions());
    }
  })
)(injectSheet(styles)(MainApp));

export default withRouter(VisibleMainApp);
