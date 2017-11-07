import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import ArticlePreview from "./ArticlePreview";

const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      title
      body
    }
  }
`;

const ArticlePreviews = ({ data: { loading, articles } }) => {
  return (
    <div>
      {loading
        ? <div> Loading... </div>
        : articles.map(article =>
            <ArticlePreview
              key={article.id}
              id={article.id}
              title={article.title}
              body={article.body}
            />
          )}
    </div>
  );
};

export default graphql(ARTICLES_QUERY)(ArticlePreviews);
