import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ProjetS = () => (
  <StaticQuery
    query={graphql`
      query GetHomeProjetS {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          id
          acf {
            home_vp_title
            home_vp_text
            home_vp_button
            home_vp_link
            home_vp_image {
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
            home_vp_svg_figure {
              alt
              url {
                localFile {
                  id
                  size
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="split">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="title">
                <h2>{data.wordpressAcfPages.acf.home_vp_title}</h2>
              </div>
              <div className="text">
                <p>{data.wordpressAcfPages.acf.home_vp_text}</p>
                <Link
                  className="button"
                  to={data.wordpressAcfPages.acf.home_vp_link}
                >
                  {data.wordpressAcfPages.acf.home_vp_button}
                </Link>
              </div>
            </div>
            <div className="col-lg-1 none"></div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="image">
                <Img
                  src={
                    data.wordpressAcfPages.acf.home_vp_image.localFile
                      .childImageSharp.sizes.src
                  }
                  sizes={
                    data.wordpressAcfPages.acf.home_vp_image.localFile
                      .childImageSharp.sizes
                  }
                />

                <img
                  className="shape-a"
                  src={
                    data.wordpressAcfPages.acf.home_vp_svg_figure.url.localFile
                      .publicURL
                  }
                  alt={data.wordpressAcfPages.acf.home_vp_svg_figure.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default ProjetS;
