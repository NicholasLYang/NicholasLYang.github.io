import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  FillerBlock: {
    width: "100%",
    fontSize: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor:  "#e8e8e8",
    gridArea: name => name,
  },
  "@media (max-width: 800px)": {
    FillerBlock: {
      display: "none"
    }
  }
});

const FillerBlock = ({ name }: { name: string }) => {
  const classes = useStyles(name);
  return (
    <div className={classes.FillerBlock} />
  )
}

export default FillerBlock;