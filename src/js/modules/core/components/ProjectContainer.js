import React, { Component } from "react";
import injectSheet from "react-jss";
import Project from "./Project";

const styles = {
  ProjectContainer: {}
};

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleMouseEnter = _ => {
    this.setState({ isActive: true });
  };

  handleMouseLeave = _ => {
    this.setState({ isActive: false });
  };

  render() {
    const { image, classes, name } = this.props;
    return (
      <div
        className={classes.ProjectContainer}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Project name={name} isActive={this.state.isActive} image={image} />
      </div>
    );
  }
}

export default injectSheet(styles)(ProjectContainer);
