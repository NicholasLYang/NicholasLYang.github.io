import React from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import injectSheet from "react-jss";

const styles = {
  Project: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  name: {
    fontSize: "2em",
    fontWeight: "400"
  }
}

const Project = ({ classes, project }) => {
  return (
    <div className={classes.Project}>
      <h1 className={classes.name}> {project.name} </h1>
      <img src={project.image} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  project: state.core.projects[props.match.params.slug]
});

export default compose(
  connect(mapStateToProps),
  injectSheet(styles)
)(Project);
