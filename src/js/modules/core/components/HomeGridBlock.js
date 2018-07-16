import React from "react";
import Link from "./Link";
import injectSheet from "react-jss";

const styles = {
  HomeGridBlock: {
    width: "100%",
    fontSize: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    transition: "background-color 1s",
    color: props => (props.isDeactivated ? "black" : "white"),
    gridArea: props => props.name,
    backgroundColor: props => props.isDeactivated ? "#e8e8e8" : props.color
  },
  "@media (max-width: 750px)": {
    HomeGridBlock: {
      width: "90%",
      marginBottom: "10px",
      height: "150px"
    }
  }
};

const HomeGridBlock = ({ id, classes, name, setActiveBlock }) => {
  const capitalize = str => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const handleMouseEnter = () => {
    setActiveBlock(id);
  };

  const handleMouseLeave = () => {
    setActiveBlock(null);
  };
  return (
    <Link
      to={`/${name}`}
      className={classes.HomeGridBlock}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {capitalize(name)}
    </Link>
  );
};
export default injectSheet(styles)(HomeGridBlock);
