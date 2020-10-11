import React from "react";
import { createUseStyles } from "react-jss";
import HeaderLinks from "./HeaderLinks";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  mainHeader: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    marginTop: "0",
    marginBottom: "1%",
    fontFamily: "proxima-nova, sans-serif",
    "&:hover": {
      textDecorationColor: "black",
    },
  },
  masthead: {
    flexGrow: "2",
    fontWeight: "500",
    fontSize: "3em",
    textDecoration: "none",
    color: "black",
  },
  "@media (max-width: 500px)": {
    masthead: {
      fontSize: "2.5em",
    },
    routes: {
      justifyContent: "center",
      maxWidth: "300px",
    },
  },
});

const Header = ({ isHome }: { isHome: boolean }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainHeader}>
      <div>
        <Link to="/">
          <h1 className={classes.masthead}>Nicholas Yang</h1>
        </Link>
        {!isHome && <HeaderLinks />}
      </div>
    </div>
  );
};

export default Header;
