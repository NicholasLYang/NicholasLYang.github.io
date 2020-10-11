import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Contact: {
    paddingBottom: "100px",
    lineHeight: "1.8em",
  },
});

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Contact}>
      <h2> Contact </h2>
      <div> nick@nicholasyang.com</div>
      <div>
        <a href="https://github.com/NicholasLYang"> GitHub </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/nicholaslyang"> LinkedIn </a>
      </div>
      <div>
        <a href="https://devpost.com/NicholasLYang"> DevPost </a>
      </div>
    </div>
  );
};

export default ContactPage;
