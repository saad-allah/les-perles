import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Email = () => (
  <StaticQuery
    query={graphql`
      query GetEmailContact {
        wordpressAcfPages(wordpress_id: { eq: 16 }) {
          id
          acf {
            icon_email {
              alt_text
              source_url
              localFile {
                id
                size
                childImageSharp {
                  id
                  sizes(maxWidth: 2000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            adresse_e_mail
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="gryff">
          <img
            src={
              data.wordpressAcfPages.acf.icon_email.localFile.childImageSharp
                .sizes.src
            }
            alt={data.wordpressAcfPages.acf.icon_email.alt_text}
          />
          <p>{data.wordpressAcfPages.acf.adresse_e_mail}</p>
        </div>
      </div>
    )}
  />
);

export default Email;
