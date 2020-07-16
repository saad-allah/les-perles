import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Left from "../../images/left-arrow-black.svg";
import Right from "../../images/right-arrow-black.svg";

const ListAppslider = ({ catName, catId }) => (
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
                section
                superficie_totale
                contactez_nous_button
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
          <div className={`col-md-10 wrapped-here arrow-app${catId + 1}`}>
            <div className={`slider-app${catId + 1}`}>
              {appList.map(({ node }, i) => (
                <>
                  {i < 6 && (
                    <div className="slide" key={i}>
                      <div className="img">
                        <img
                          src={
                            node.acf.featured_image.localFile.childImageSharp
                              .resize.src
                          }
                          alt={node.acf.featured_image.alt_text}
                        />
                      </div>
                      <div className="text">
                        <p>
                          <span>Type : </span>
                          <i>
                            {node.categories &&
                              node.categories.map(
                                (category) => `${category.name} `
                              )}
                          </i>
                        </p>
                        <p>
                          <span>Superficie totale : </span>
                          {node.acf.superficie_totale}
                        </p>
                        <p>
                          <span>Section : </span> {node.acf.section}
                        </p>
                        <Link
                          className="buttons"
                          to={`/appartements/${node.slug}`}
                        >
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="arrows">
              <ul>
                <li className="prev4">
                  <img src={Left} alt="/" />
                </li>
                <li className="next4">
                  <img src={Right} alt="" />
                </li>
              </ul>
            </div>
          </div>
          {appList.length > 3 && (
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
export default ListAppslider;
