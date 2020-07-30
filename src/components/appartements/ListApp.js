import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const AppLists = ({ catName }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpAppartement {
          edges {
            node {
              id
              categories {
                name
              }
              acf {
                featured_image {
                  source_url
                  alt_text
                  localFile {
                    childImageSharp {
                      resize(width: 1214, height: 1214, quality: 100) {
                        height
                        width
                        src
                      }
                    }
                  }
                }
                superficie_totale
                contactez_nous_button
                type_apt
              }
              slug
              title
            }
          }
        }
      }
    `}
    render={(data) => {
      const appList = data.allWordpressWpAppartement.edges.filter(
        (edge) => edge.node.categories[0].name === catName
      );
      return (
        <>
          {appList.map(({ node }, i) => (
            <>
              {i < 6 && (
                <div
                  className="col-lg-4 col-md-6 col-12 solo wrapped-here"
                  key={i}
                >
                  <div className="img">
                    <img
                      src={
                        node.acf.featured_image.localFile.childImageSharp.resize
                          .src
                      }
                      alt={node.acf.featured_image.alt_text}
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span>Type : </span>
                      <i>
                    {node.acf.type_apt}
                      </i>
                    </p>
                    <p>
                      <span>Superficie totale : </span>
                      {node.acf.superficie_totale}
                    </p>

                    <Link className="buttons" to={`/appartements/${node.slug}`}>
                      En savoir plus
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}

          {appList.length > 6 && (
            <div className="col-md-12">
              <div className="hasMore-warpp">
                <Link className="hasMore" to={`/appartements/type/${catName}`}>
                  Voir plus
                </Link>
              </div>
            </div>
          )}
        </>
      );
    }}
  />
);
export default AppLists;
