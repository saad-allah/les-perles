import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
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
              {i < 1 && (
                <div
                  className={appList.length > 1 ? `  wrapped-here ` : `  wrapped-here solo `}
                  key={i}
                >
                  <div className="img">

                        <img src="/placeholder.jpg" className="hide-img" alt={node.acf.type_apt}/>
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
                  </div>
                </div>
              )}
            </>
          ))}



              <div className="hasMore-warpp">
                <Link className="hasMore" to={`/appartements/type/${catName}`}>
                  Voir plus
                </Link>
              </div>


        </>
      );
    }}
  />
);
export default AppLists;
