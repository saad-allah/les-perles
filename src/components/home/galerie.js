import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";

const GaleriesHome = () => (
  <StaticQuery
    query={graphql`
      query GetHomeGaleriesSlider {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          id
          acf {
            home_galerie_title
            home_galerie_desc_bloc_1
            home_galerie_desc_bloc_2
            home_galerie_button
          }
        }
        allWordpressWpGaleries(limit: 10) {
          edges {
            node {
              id
              acf {
                featured_image_for_this_galerie {
                  alt_text
                  source_url
                  localFile {
                    childImageSharp {
                      id
                      resize(width: 411, quality: 100, height: 277) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="galeries">
        <div className="container">
          <div className="row     justify-content-center">
            <div className="col-sm-12">
              <div className="title">
                <h2>{data.wordpressAcfPages.acf.home_galerie_title}</h2>
              </div>
              <div className="desc">
                <p>{data.wordpressAcfPages.acf.home_galerie_desc_bloc_1}</p>
                <p>{data.wordpressAcfPages.acf.home_galerie_desc_bloc_2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="galerie-slider">
          {data.allWordpressWpGaleries.edges.map(({ node }, i) => (
            <div className="slide" key={i}>
              <div className="image">
                <img
                  src={
                    node.acf.featured_image_for_this_galerie.localFile
                      .childImageSharp.resize.src
                  }
                  alt={node.acf.featured_image_for_this_galerie.alt_text}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="galeries-button">
          <Link className="button" to="/galerie">
            {data.wordpressAcfPages.acf.home_galerie_button}
          </Link>
        </div>
      </div>
    )}
  />
);

export default GaleriesHome;
