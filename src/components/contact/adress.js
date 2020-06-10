import { StaticQuery, graphql,Link } from "gatsby";
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
          url {
            alt_text
            source_url
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
                            src={data.wordpressAcfPages.acf.icon_map.url.source_url}
                            alt={data.wordpressAcfPages.acf.icon_map.url.alt_text}
                          />
                            {data.wordpressAcfPages.acf.adresse_map}
                        </div>
                    </div>

      )
    )}
  />
);

export default Adresse;
