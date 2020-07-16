import { StaticQuery, graphql } from "gatsby";
import React from "react";

const ParagraphApp = () => (
  <StaticQuery
    query={graphql`
      query GetContentAppt {
        wordpressAcfPages(wordpress_id: { eq: 20 }) {
          id
          acf {
            appartements_title
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-md-12">
        <div className="title">
          <h2>{data.wordpressAcfPages.acf.appartements_title} </h2>
        </div>
      </div>
    )}
  />
);

export default ParagraphApp;
