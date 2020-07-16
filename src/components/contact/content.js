import { StaticQuery, graphql } from "gatsby";
import React from "react";

const ParagraphContact = () => (
  <StaticQuery
    query={graphql`
      query GetContentContact {
        wordpressAcfPages(wordpress_id: { eq: 16 }) {
          id
          acf {
            contact_desc
            contact_title
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-md-12">
        <div className="title">
          <h2> {data.wordpressAcfPages.acf.contact_title}</h2>
        </div>
        <div className="desc">
          <p> {data.wordpressAcfPages.acf.contact_desc}</p>
        </div>
      </div>
    )}
  />
);

export default ParagraphContact;
