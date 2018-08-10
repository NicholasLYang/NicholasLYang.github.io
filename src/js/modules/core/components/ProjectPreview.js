import React, { Component } from "react";
import injectSheet from "react-jss";
import Link from './Link'

const styles = {
  Project: {
    position: "relative",
    textAlign: "center",
    color: "black",
    backgroundColor: props => props.color,
    lineHeight: "0",
    margin: "20px"
  },
  image: {
    transition: "filter 0.25s",
    filter: props => (props.isActive ? "opacity(40%)" : "none")
  },
  name: {
    fontSize: "4em",
    fontWeight: "500",
    transition: "opacity 1s",
    opacity: props => (props.isActive ? 1 : 0),
    lineHeight: "1.4em",
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};
const Project = ({ classes, name, image }) => {
  return (
    <div className={classes.Project}>
      <img src={image} className={classes.image} />
      <div className={classes.name}> {name} </div>
    </div>
  );
};

const StyledProject = injectSheet(styles)(Project);

class ProjectPreview extends Component {
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
        <Link to={`/projects/${this.props.slug}`}>
          <StyledProject isActive={this.state.isActive} {...this.props} />
        </Link>
      </div>
    );
  }
}

export default ProjectPreview;
