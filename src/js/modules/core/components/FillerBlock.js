import React from "react";
import injectSheet from "react-jss";

const styles = {
  FillerBlock: {
    width: "100%",
    fontSize: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor:  "#e8e8e8",
    gridArea: props => props.name,
  },
  "@media (max-width: 800px)": {
    FillerBlock: {
      display: "none"
    }
  }
};

const FillerBlock = ({ classes }) => {
  return (
    <div className={classes.FillerBlock} />
  )
}

export default injectSheet(styles)(FillerBlock);