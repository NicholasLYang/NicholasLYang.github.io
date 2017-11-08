import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
  title: {
    lineHeight: "1.3",
    color: "black",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

const ArticlePreview = ({ classes, id, title, body }) =>
  <div>
    <Link to={`/blog/` + id}>
      <div className={classes.title}>
        <h2>
          {title}
        </h2>
      </div>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>;

export default injectSheet(styles)(ArticlePreview);
