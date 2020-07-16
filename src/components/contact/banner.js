import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const BannerContact = () => (
  <StaticQuery
    query={graphql`
      query GetBannerContact {
        wordpressAcfPages(wordpress_id: { eq: 16 }) {
          id
          acf {
            banner_title
            banner_img {
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
          }
        }
      }
    `}
    render={(data) => (
      <div className="banner ">
        <Img
          className="banner-img"
          src={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp
              .sizes.src
          }
          sizes={
            data.wordpressAcfPages.acf.banner_img.localFile.childImageSharp
              .sizes
          }
        />
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title nOm">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.banner_title,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default BannerContact;
