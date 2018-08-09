import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";
import ProjectContainer from "./ProjectContainer";

const styles = {
  ProjectsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  }
};

const projects = [
  {
    name: "The Stuyvesant Spectator",
    image: "/images/projects/stuyspec.png",
    color: "#f15025"
  },
  {
    name: "Fashion Tree",
    image: "/images/projects/fashion-tree.png",
    color: "#A1D2CE"
  },
  {
    name: "Ruby Google Summer of Code",
    image: "/images/projects/gsoc.png",
    color: "#78CAD2"
  },
];

const ProjectsPage = ({ classes }) => (
  <Fader>
    <div className={classes.ProjectsPage}>
    {projects.map(project => (
      <ProjectContainer {...project} />
    ))}
    </div>
  </Fader>
);

export default injectSheet(styles)(ProjectsPage);
