import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  resume: {
    fontFamily: "'Source Sans Pro', sans-serif",
    padding: "50px",
    fontSize: "1.5em",
    backgroundColor: "#0e79b2",
    transition: "background-color 1s",
    fontVariant: "small-caps",
    color: "white",
    marginBottom: "18px",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  }
});

const ResumePage = () => {
  const classes = useStyles()
  return (
      <a href="/resume.pdf">
        <div className={classes.resume}>
          <div> Download Resume </div>
        </div>
      </a>
  );
}

export default ResumePage;
