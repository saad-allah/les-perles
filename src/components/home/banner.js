import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const BannerHome = () => (
  <StaticQuery
    query={graphql`
      query GetBannerHome {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          id
          acf {
            home_banner_button
            home_banner_desc
            home_banner_title
            home_banner_button_link
            home_banner_bg {
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
    render={data => (
      <div className="banner home">
        <Img
          className="banner-img"
          src={
            data.wordpressAcfPages.acf.home_banner_bg.localFile.childImageSharp
              .sizes.src
          }
          sizes={
            data.wordpressAcfPages.acf.home_banner_bg.localFile.childImageSharp
              .sizes
          }
        />
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title">
                <h1>{data.wordpressAcfPages.acf.home_banner_title}</h1>
              </div>
              <div className="subtitle">
                <p>{data.wordpressAcfPages.acf.home_banner_desc}</p>
              </div>
              <Link
                className="button"
                to={`/${data.wordpressAcfPages.acf.home_banner_button_link}`}
              >
                {data.wordpressAcfPages.acf.home_banner_button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default BannerHome;
