import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";

const styles = {
  warning: {
    padding: "25px"
  },
  projectRow: {
    display: "flex",
    flexDirection: "row"
  }
};
const ProjectsPage = ({ classes }) =>
  <Fader>
      <div className={classes.warning}>
      Still under construction. Please check out my {" "}
      <a href="https://github.com/NicholasLYang">GitHub</a>  for now.
      </div>
  </Fader>;

export default injectSheet(styles)(ProjectsPage);
