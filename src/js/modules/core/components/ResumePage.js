import React from "react";
import injectSheet from "react-jss";

const styles = {
  resume: {
    padding: "50px",
    fontSize: "1.5em",
    backgroundColor: "#00cfc1",
    transition: "background-color 1s",
    fontVariant: "small-caps",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  }
};
const ResumePage = ({ classes }) => (
  <a href="/resume.pdf">
    <div className={classes.resume}>
      <div className={classes.resumeText}> Download Resume </div>{" "}
    </div>
  </a>
);

export default injectSheet(styles)(ResumePage);
