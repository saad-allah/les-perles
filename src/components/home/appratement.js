import { useStaticQuery, graphql, Link } from "gatsby";
import React from 'react';

import Up from "../../images/up.svg";
import Down from "../../images/down.svg";
import Zom from "../../images/search.svg";
import Right from "../../images/right.svg";

const HeroSlider = () => {

  const data = useStaticQuery(graphql`
    query GetHomeAppSlider {
      wordpressAcfPages(wordpress_id: { eq: 2 }) {
        id
        acf {
          home_appartements_title
          home_appartements_link_text
          home_appartements_link
        }
      }
      allWordpressWpAppartement( limit: 5) {
          edges {
            node {
              id
              acf {
                featured_image {
                  source_url
                  alt_text
                  localFile {
                    childImageSharp {
                      resize(width: 851, height:888, quality: 100) {
                        height
                        width
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
  `);

    return (

      <div className="appartements">
        <div className="bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                   <h2>{data.wordpressAcfPages.acf.home_appartements_title}</h2>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="big-slider" >
                  {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
                <div className="slide" key={i}>
                  <div className="wrapper">
                    <img src={node.acf.featured_image.localFile.childImageSharp.resize.src} alt={node.acf.featured_image.alt_text}/>
                     <div className="zoom">
                  <a href={node.acf.featured_image.localFile.childImageSharp.resize.src}  data-fancybox >

                   <img src={Zom} alt="/" /></a>
                  </div>
                      </div>
                </div>
          ))}
              </div>
            </div>
            <div className="col-md-3 col-10 small">
              <div className="small-slider" >
                  {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
                <div className="slide" key={i}>
                  <img src={node.acf.featured_image.localFile.childImageSharp.resize.src} alt={node.acf.featured_image.alt_text}/>
                </div>
          ))}
              </div>
              <div className="arrows">
                <ul>
                  <li className="prev2">
                    <img
                    src={Down}
                      alt="/"
                    />
                  </li>
                  <li className="next2">
                    <img
                    src={Up}
                      alt="/"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="discover">
                <Link className="decouvrir" to="/appartements">
                  {data.wordpressAcfPages.acf.home_appartements_link_text}
                  <img
                    src={Right}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default HeroSlider;
