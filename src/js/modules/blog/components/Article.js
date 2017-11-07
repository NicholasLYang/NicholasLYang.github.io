import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query ArticleQuery($id: ID!) {
    article(id: $id) {
      id
      title
      body
    }
  }
`;

const Article = ({ data: { loading, article } }) => {
  return (
    <div>
      {loading
        ? <div> Loading... </div>
        : <div>
            <h2>
              {" "}{article.title}{" "}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>}
    </div>
  );
};

export default graphql(ARTICLE_QUERY, {
  options: ({ id }) => ({ variables: { id } })
})(Article);
