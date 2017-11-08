import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import injectSheet from "react-jss";

const styles = {
  title: {
    lineHeight: "1.3",
    color: "black",
    padding: "0",
    "&:hover": {
      textDecoration: "underline"
    }
  },
};

const ARTICLE_QUERY = gql`
  query ArticleQuery($id: ID!) {
    article(id: $id) {
      id
      title
      body
    }
  }
`;

const Article = ({ classes, data: { loading, article } }) => {
  return (
    <div>
      {loading
        ? <div> Loading... </div>
        : <div>
            <div className={classes.title}>
              <h2>
                {" "}{article.title}{" "}
              </h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>}
    </div>
  );
};

export default graphql(ARTICLE_QUERY, {
  options: ({ id }) => ({ variables: { id } })
})(injectSheet(styles)(Article));
