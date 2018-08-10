import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";
import ProjectPreview from "./ProjectPreview";
import { compose } from 'redux'
import { connect } from 'react-redux'

const styles = {
  ProjectsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  }
};

const ProjectsPage = ({ classes, projects }) => (
  <Fader>
    <div className={classes.ProjectsPage}>
    {projects.map(project => (
      <ProjectPreview key={project.slug} {...project} />
    ))}
    </div>
  </Fader>
);

const mapStateToProps = state => ({
  projects: Object.values(state.core.projects)
})

export default compose(
  injectSheet(styles),
  connect(mapStateToProps)
)(ProjectsPage);
