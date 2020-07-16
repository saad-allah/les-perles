import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const GalerieG = () => (
  <StaticQuery
    query={graphql`
      query GetContentGaleriess {
        allWordpressWpGaleries(sort: { fields: [date], order: DESC }) {
          edges {
            node {
              title
              slug
              acf {
                featured_image_for_this_galerie {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      resize(width: 808, height: 521, quality: 100) {
                        src
                      }
                    }
                  }
                }
                galerie_dimages {
                  gelerie_imgs {
                    id
                    localFile {
                      childImageSharp {
                        resize(width: 808, height: 521, quality: 100) {
                          src
                        }
                      }
                    }
                    source_url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        {data.allWordpressWpGaleries.edges.map(({ node }, i) => (
          <div className="col-lg-4 col-md-6 col-12" key={i}>
            <a
              href={
                node.acf.featured_image_for_this_galerie.localFile
                  .childImageSharp.resize.src
              }
              data-fancybox={node.slug}
            >
              <div className="sly-wrapper img-1">
                <Img
                  className="w100h100"
                  fluid={
                    node.acf.featured_image_for_this_galerie.localFile
                      .childImageSharp.fluid
                  }
                />
                <div className="overlay"></div>
                <div className="text">
                  <p>{node.title}</p>
                </div>
              </div>
            </a>
          </div>
        ))}

        {data.allWordpressWpGaleries.edges.map(({ node }, j) => (
          <div className="dinon" id={node.slug} key={node.slug}>
            {node.acf.galerie_dimages.map((imgMap, m) => (
              <a
                href={imgMap.gelerie_imgs.localFile.childImageSharp.resize.src}
                data-fancybox={node.slug}
                key={`${m}-${imgMap.gelerie_imgs.id}`}
              ></a>
            ))}
          </div>
        ))}
      </>
    )}
  />
);

export default GalerieG;
