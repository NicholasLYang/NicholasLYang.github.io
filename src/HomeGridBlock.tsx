import React from "react";
import {createUseStyles} from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  HomeGridBlock: {
    width: "100%",
    fontSize: "1.7em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontVariant: "small-caps",
    padding: "20px",
    transition: "background-color 0.5s, color 0.5s",
    color: (props) => (props.isDeactivated ? "black" : "white"),
    gridArea: (props) => props.name,
    backgroundColor: (props) => (props.isDeactivated ? "#e8e8e8" : props.color),
  },
  "@media (max-width: 800px)": {
    HomeGridBlock: {
      width: "90%",
      marginBottom: "10px",
      height: "150px",
    },
  },
});

interface Props {
  id: number;
  name: string;
  activeBlock: number | undefined;
  setActiveBlock: (id: number | undefined) => void;
  isDeactivated: boolean;
  color: string
}

const HomeGridBlock = (props: Props) => {
  const classes = useStyles(props);
  const { id, name, setActiveBlock } = props;
  function capitalize(str: string) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  const handleMouseEnter = () => {
    setActiveBlock(id);
  };

  const handleMouseLeave = () => {
    setActiveBlock(undefined);
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
export default HomeGridBlock;
