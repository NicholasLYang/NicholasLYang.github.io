import React from "react";
import injectSheet from "react-jss";

const styles = {
  resume: {
    padding: "50px"
  }
};
const ResumePage = ({ classes }) =>
  <div className={classes.resume}>
    <a href="/resume.pdf"> Download Resume </a>
  </div>;

export default injectSheet(styles)(ResumePage);
