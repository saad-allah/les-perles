import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Left from "../../images/left-arrow-black.svg";
import Right from "../../images/right-arrow-black.svg";
import Img from "gatsby-image";
const ListAppslider = ({ catName, catId }) => (
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
                type_apt
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
                   <React.Fragment key={i}>
                  {i < 6 && (
                    <div className="slide" key={i}>
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
                          <span>Superficie habitable : </span>
                          {node.acf.superficie_totale}
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
                 </React.Fragment>
              ))}
            </div>
            <div className="arrows">
              <ul>
                <li className="prev4">
                  <img src={Left} alt="/" />
                </li>
                <li className="next4">
                  <img src={Right} alt="/" />
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
