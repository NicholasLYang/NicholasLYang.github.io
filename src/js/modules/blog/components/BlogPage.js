import React from "react";
import Fader from "../../core/components/Fader";
import injectSheet from "react-jss";
import Article from "./Article";
import ArticlePreviews from "./ArticlePreviews";
import { Link } from "react-router-dom"

const styles = {
  blog: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "500px"
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

const BlogPage = ({ children, classes, match }) => {
  return (
    <Fader>
      <div className={classes.blog}>
        <Link to="/blog">
          <h2 className={classes.blogTitle}> Blog </h2>
        </Link>
        {match.params.id
          ? <Article id={match.params.id} />
          : <ArticlePreviews />}
        {children}
      </div>
    </Fader>
  );
};

export default injectSheet(styles)(BlogPage);
