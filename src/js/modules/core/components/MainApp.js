import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { Link, withRouter } from 'react-router-dom';
import connect from "react-redux/lib/connect/connect";

import { refreshWindowDimensions } from "./../actions";

const styles = {
  appWrapper: {
    minHeight: "100%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "row"
  },
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
  mainHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    fontFamily: "'Cormorant Garamond', serif"
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    fontFamily: "'Proza Libre', sans-serif"
  },
  mainContent: {
    flexDirection: "column",
    display: "flex",
    flex: "1 0 auto"
  },
  appFooter: {
    height: "40px",
    textAlign: "center"
  }
};

class MainApp extends PureComponent {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
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
      <div className={classes.appWrapper}>
        <div className={classes.mainWrapper}>
          <div className={classes.mainHeader}>
            <h1> Nicholas Yang </h1>
            <div>
              <Link to="/about"> About </Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/resume"> Resume </Link>
            </div>
          </div>
          <div className={classes.mainContent}>
            <div className={classes.mainContainer}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const VisibleMainApp = connect(
  (state, ownProps) => ({
    language: state.core.language,
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
