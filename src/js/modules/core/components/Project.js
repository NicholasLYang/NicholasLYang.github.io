import React from "react";
import injectSheet from "react-jss";

const styles = {
  Project: {
    position: "relative",
    textAlign: "center",
    color: "black",
    padding: "20px"
  },
  image: {
    transition: "filter 1s",
    filter: props => props.isActive ? "opacity(40%) saturate(60%)" : "none"
  },
  name: {
    fontSize: "4em",
    fontWeight: "500",
    transition: "opacity 1s",
    opacity: props => (props.isActive ? 1 : 0),
    lineHeight: "1.4em",
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};
const Project = ({ classes, name, image }) => {
  return (
    <div className={classes.Project}>
      <img src={image} className={classes.image} />
      <div className={classes.name}> {name} </div>
    </div>
  );
};

export default injectSheet(styles)(Project);
