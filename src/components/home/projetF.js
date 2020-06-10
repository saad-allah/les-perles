import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ProjetF = () => (
  <StaticQuery
    query={graphql`
      query GetHomeProjetF {
  wordpressAcfPages(wordpress_id: {eq:  2}) {
    id
    acf {
      home_p_concept_title
      home_p_concept_text
      home_p_concept_button
      home_p_concept_image {
        alt_text
        source_url
        localFile {
          id
          size
          childImageSharp {
            id
            sizes(maxWidth: 2000) {
               ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
}
    `}
    render={data => (
      console.log(data),
      (
        <div className="split">
                <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6  order-0">
                          <div className="image">
                            <Img
                               src={
                                 data.wordpressAcfPages.acf.home_p_concept_image.localFile
                                   .childImageSharp.sizes.src
                               }
                               sizes={
                                 data.wordpressAcfPages.acf.home_p_concept_image.localFile
                                   .childImageSharp.sizes
                               }
                             />
                              <img className="shape-r" src="https://www.theastro.co/les-perles/assets/images/logos/r.svg" alt="/"/>
                          </div>
                      </div>
                      <div className="col-lg-1 none order-2"></div>
                      <div className="col-lg-5 col-md-6 order-1">
                          <div className="text">
                              <div className="title">
                                  <h2>{data.wordpressAcfPages.acf.home_p_concept_title}</h2>
                              </div>
                              <div className="text">
                                      <p>{data.wordpressAcfPages.acf.home_p_concept_text}</p>
                                    <Link className="button" to="/projet-et-concept">{data.wordpressAcfPages.acf.home_p_concept_button}</Link>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

      )
    )}
  />
);

export default ProjetF;
