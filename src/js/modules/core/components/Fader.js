import React, { Component } from "react";
import { delay } from "../utils";
import injectSheet from "react-jss";
import { FADE_DURATION } from "../constants";
import { connect } from "react-redux";

const styles = {
  fadedComponent: {
    opacity: props => props.opacity,
    transition: `opacity ${FADE_DURATION}ms`
  },
  "@media (max-width: 800px)": {
    fadedComponent: {
      width: "100%",
    }
  }
};

const FadedComponent = ({ classes, children }) =>
  <div className={classes.fadedComponent}>
    {children}
  </div>;

const StyledFadedComponent = injectSheet(styles)(FadedComponent);

class Fader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {
    delay(FADE_DURATION).then(() => this.setState({ opacity: 1 }));
  }

  componentDidUpdate() {
    // If the component is fading out
    if (this.props.isFading && this.state.opacity === 1) {
      this.setState({ opacity: 0 });
    }
  }

  render() {
    return (
      <StyledFadedComponent opacity={this.state.opacity}>
        {this.props.children}
      </StyledFadedComponent>
    );
  }
}

const mapStateToProps = state => ({
  isFading: state.core.isFading
});

export default connect(mapStateToProps)(Fader);
