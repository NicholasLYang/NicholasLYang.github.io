import React from "react";
import Link from "./Link";
import injectSheet from "react-jss";
import HeaderLinks from "./HeaderLinks";

const styles = {
  mainHeader: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flex: "1 0 auto",
    margin: "5%",
    marginTop: "0",
    marginBottom: "2%",
    fontFamily: "proxima-nova, sans-serif",
    "&:hover": {
      textDecorationColor: "black"
    }
  },
  masthead: {
    flexGrow: "2",
    fontWeight: "500",
    fontSize: "4em",
    textDecoration: "none",
    color: "black"
  },
  "@media (max-width: 500px)": {
    masthead: {
      fontSize: "2.5em"
    },
    routes: {
      justifyContent: "center",
      maxWidth: "300px"
    }
  }
};

const Header = ({ classes, isHome }) => (
  <div className={classes.mainHeader}>
    <div>
      <Link to="/">
        <h1 className={classes.masthead}>Nicholas Yang</h1>
      </Link>
      {!isHome && <HeaderLinks />}
    </div>
  </div>
);

export default injectSheet(styles)(Header);
