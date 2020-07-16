import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Paragraphpdc = () => (
  <StaticQuery
    query={graphql`
      query GetContentPdc {
        wordpressPage(wordpress_id: { eq: 3 }) {
          content
        }
      }
    `}
    render={(data) => (
      <div className="politique-de-confidentialite">
        <div className="underlay"></div>
        <div className="container">
          <div className="row">
            <div
              className="indexed"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content,
              }}
            />
          </div>
        </div>
      </div>
    )}
  />
);

export default Paragraphpdc;
