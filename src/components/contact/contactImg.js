import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ContactImg = () => (
  <StaticQuery
    query={graphql`
      query GetImgContact {
        wordpressAcfPages(wordpress_id: { eq: 16 }) {
          id
          acf {
            contact_img {
              alt_text
              source_url
              localFile {
                id
                size
                childImageSharp {
                  id
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="col-lg-6 col-md-12 col-12">
        <div className="image">
          <Img
            src={
              data.wordpressAcfPages.acf.contact_img.localFile.childImageSharp
                .sizes.src
            }
            sizes={
              data.wordpressAcfPages.acf.contact_img.localFile.childImageSharp
                .sizes
            }
          />
        </div>
      </div>
    )}
  />
);

export default ContactImg;
