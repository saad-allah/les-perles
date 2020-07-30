import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Placeholder from "../../images/placeholder.jpg";
const AppLists = ({ catName }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpAppartement(sort: {fields: acf___type_apt, order: ASC}) {
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
                      sizes(maxWidth: 2000) {
                        ...GatsbyImageSharpSizes
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
                  className={appList.length > 1 ? `col-lg-4 col-md-6 col-12  wrapped-here ` : `col-lg-4 col-md-6 col-12  wrapped-here solo `}
                  key={i}
                >
                  <div className="img">

                        <img src={Placeholder} className="hide-img" alt=  {node.acf.type_apt}/>
                  <Img
                    className="imgCoverApp"
                    src={
                      node.acf.featured_image.localFile.childImageSharp
                        .sizes.src
                    }
                    sizes={
                      node.acf.featured_image.localFile.childImageSharp
                        .sizes
                    }
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
