import React, { Component } from "react";
import Project from "./Project";

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
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Project isActive={this.state.isActive} {...this.props} />
      </div>
    );
  }
}

export default ProjectContainer;
