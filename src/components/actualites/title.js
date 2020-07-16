import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleBlog = () => (
  <StaticQuery
    query={graphql`
      query GetContentACC {
        wordpressAcfPages(wordpress_id: { eq: 39 }) {
          id
          acf {
            actualite_title
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-md-12">
        <div className="title">
          <h2>{data.wordpressAcfPages.acf.actualite_title} </h2>
        </div>
      </div>
    )}
  />
);

export default TitleBlog;
