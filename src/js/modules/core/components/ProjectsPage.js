import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";
import ProjectPreview from "./ProjectPreview";
import { compose } from "redux";
import { connect } from "react-redux";

const styles = {
  ProjectsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%"
  },
  "@media (max-width: 800px)": {
    ProjectsPage: {
      alignItems: "center"
    }
  }
};

const ProjectsPage = ({ classes, projects }) => (
  <div className={classes.ProjectsPage}>
    <Fader>
      {projects.map(project => {
        console.log(project);
        return <ProjectPreview key={project.slug} {...project} />
      })}
    </Fader>
  </div>
);

const mapStateToProps = state => ({
  projects: Object.values(state.core.projects)
});

export default compose(injectSheet(styles), connect(mapStateToProps))(
  ProjectsPage
);
