import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";
import Project from "./ProjectContainer";

const styles = {
  ProjectsPage: {
    display: "flex",
    flexDirection: "column"
  }
};

const projects = [
  {
    name: "The Stuyvesant Spectator",
    image: "/images/projects/stuyspec.png"
  },
  {
    name: "Fashion Tree",
    image: "/images/projects/fashion-tree.png"
  }
];
const ProjectsPage = ({ classes }) => (
  <Fader>
    <div className={classes.ProjectsPage}>
    {projects.map(({ image, name }) => (
      <Project image={image} name={name} />
    ))}
    </div>
  </Fader>
);

export default injectSheet(styles)(ProjectsPage);
