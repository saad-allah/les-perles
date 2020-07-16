import { StaticQuery, graphql } from "gatsby";
import React from "react";

const ParagraphG = () => (
  <StaticQuery
    query={graphql`
      query GetContentGaleries {
        wordpressAcfPages(wordpress_id: { eq: 14 }) {
          id
          acf {
            galerie_title
            galerie_desc
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-md-12">
        <div className="title">
          <h2>{data.wordpressAcfPages.acf.galerie_title}</h2>
        </div>
        <div className="desc">
          <p>{data.wordpressAcfPages.acf.galerie_desc}</p>
        </div>
      </div>
    )}
  />
);

export default ParagraphG;
