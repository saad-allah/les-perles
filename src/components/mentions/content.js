import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";

const ParagraphMen = () => (
  <StaticQuery
    query={graphql`
      query GetContentMentions {
        wordpressPage(wordpress_id: { eq: 309 }) {
          content
        }
      }
    `}
    render={data => (
      <div className="mentions-legales">
        <div className="underlay"></div>
        <div className="container">
          <div className="row">
            <div
              className="indexed"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content
              }}
            />
          </div>
        </div>
      </div>
    )}
  />
);

export default ParagraphMen;
