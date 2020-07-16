import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Right from "../../images/right-arrow.svg";
import Left from "../../images/left-arrow.svg";
const GalerieG = () => (
  <StaticQuery
    query={graphql`
      query GetContentGaleriesSliderShow {
        wordpressAcfPages(wordpress_id: { eq: 14 }) {
          id
          acf {
            slider_show {
              image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    resize(width: 1110, height: 380, quality: 100) {
                      src
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
      <div className="col-md-12 slider-wrapper">
        <div className="g-slider">
          {data.wordpressAcfPages.acf.slider_show.map((item, i) => (
            <div className="slide" key={i}>
              <div className="image">
                <img
                  src={item.image.localFile.childImageSharp.resize.src}
                  alt={item.image.alt_text}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <ul>
            <li className="prev3 ">
              <img src={Left} alt="/" />
            </li>
            <li className="next3">
              <img src={Right} alt="/" />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
);

export default GalerieG;
