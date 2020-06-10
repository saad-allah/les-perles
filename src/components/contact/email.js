import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Email = () => (

  <StaticQuery
    query={graphql`
      query GetEmailContact
      {
        wordpressAcfPages(wordpress_id: {eq: 16}) {
      id
      acf {
        icon_email {
        url {
          alt_text
          source_url
        }
      }
        adresse_e_mail
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
                  src={data.wordpressAcfPages.acf.icon_email.url.source_url}
                  alt={data.wordpressAcfPages.acf.icon_email.url.alt_text}
                />
                        <p>{data.wordpressAcfPages.acf.adresse_e_mail}</p> 
                            </div>
                        </div>
      )
    )}
  />
);

export default Email;
