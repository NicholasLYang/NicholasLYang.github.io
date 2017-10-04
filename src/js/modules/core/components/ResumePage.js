import React from "react";
import PDF from "react-pdf-js";
import injectSheet from "react-jss";

const styles = {
  resume: {
    padding: "50px"
  }
};
const ResumePage = ({ classes }) =>
  <div className={classes.resume}>
    <PDF file="resume.pdf" scale={1.5}/>
  </div>;

export default injectSheet(styles)(ResumePage);
