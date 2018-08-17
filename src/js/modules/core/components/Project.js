import React from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import injectSheet from "react-jss";

const styles = {
  Project: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "100px"
  },
  name: {
    fontSize: "2em",
    fontWeight: "400",
    paddingBottom: "40px"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  description: {
    padding: "40px",
    maxWidth: "600px"
  },
  image: {
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
  }
}

const Project = ({ classes, project }) => {
  return (
    <div className={classes.Project}>
      <h1 className={classes.name}> {project.name} </h1>
      <div className={classes.content}>
      <img className={classes.image} src={project.image} />
        <div className={classes.description}>{project.description} </div>
      </div>
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
