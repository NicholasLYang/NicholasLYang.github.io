import React from "react";
import injectSheet from "react-jss";

const styles = {
  resume: {
    fontFamily: "'Source Sans Pro', sans-serif",
    padding: "50px",
    fontSize: "1.5em",
    backgroundColor: "#0e79b2",
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
