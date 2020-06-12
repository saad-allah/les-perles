import { StaticQuery, graphql } from "gatsby";
import React from "react";



const Adresse = () => (


    <StaticQuery
      query={graphql`
        query GetAdressContact
        {
          wordpressAcfPages(wordpress_id: {eq: 16}) {
        id
        acf {
          icon_map {
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
          adresse_map

        }
      }
        }

      `}
    render={data => (
      console.log(data),
      (
        <div className="col-lg-4 col-md-6 col-12">
                        <div className="gryff">
                          <img
                            src={data.wordpressAcfPages.acf.icon_map.localFile
                              .childImageSharp.sizes.src}
                            alt={data.wordpressAcfPages.acf.icon_map.alt_text}
                          />
                            {data.wordpressAcfPages.acf.adresse_map}
                        </div>
                    </div>

      )
    )}
  />
);

export default Adresse;
