import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Left from "../../images/left-arrow-black.svg";
import Right from "../../images/right-arrow-black.svg";


const ListAppMap = () => (
  <StaticQuery
    query={graphql`
      query GetCProjetApp
      {

      allWordpressWpAppartement(sort: {fields: categories___name}, limit: 5) {
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
                      resize(width: 188, height:63, quality: 100) {
                        height
                        width
                        src
                      }
                    }
                  }
                }
                type_apt
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
    render={data => (

      (
        <div className="projet-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wrapped-here">
                <div className="slider-concepts">
                  {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
                    <div className="slide" key={i}>
                      <div className="wrapour">
                        <div className="img">
                        <img src={node.acf.featured_image.localFile.childImageSharp.resize.src} alt={node.acf.featured_image.alt_text}/>
                        </div>
                        <div className="text">
                          <p>
                            <span>Type : </span>   {node.acf.type_apt}
                          </p>
                          <p>
                            <span>Superficie habitable : </span>
                            {node.acf.superficie_totale}
                          </p>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="arrows">
            <ul>
              <li className="prevLast">
                <img
                  src={Left}
                  alt="/"
                />
              </li>
              <li className="nextLast">
                <img
                  src={Right}
                  alt="/"
                />
              </li>
            </ul>
          </div>
        </div>


      )
    )}
  />
);

export default ListAppMap;
