import React from "react";
import Post from "./Post";
import Fader from "../../core/components/Fader"
import injectSheet from "react-jss";

const styles = {
  blog: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "500px"
  },
  blogTitle: {
    fontSize: "3em",
  },
  "@media (max-width: 500px)": {
    blogTitle: {
      fontSize: "2em"
    },
    blog: {
      paddingLeft: "50px",
      paddingRight: "50px"
    }
  }
};

const BlogPage = ({ classes }) =>
  <Fader>
  <div className={classes.blog}>
    <h2 className={classes.blogTitle}> Blog </h2>
    <Post />
  </div>
  </Fader>;

export default injectSheet(styles)(BlogPage);
