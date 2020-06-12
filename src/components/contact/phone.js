import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Phone = () => (

  <StaticQuery
    query={graphql`
      query GetPhoneContact
      {
        wordpressAcfPages(wordpress_id: {eq: 16}) {
      id
      acf {
      icon_phone {
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
        numero_de_telephone
        format_international
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
                                src={data.wordpressAcfPages.acf.icon_phone.localFile
                                  .childImageSharp.sizes.src}
                                alt={data.wordpressAcfPages.acf.icon_phone.alt_text}
                              />
                                <p>


{data.wordpressAcfPages.acf.format_international}

                                </p>
                            </div>
                        </div>

      )
    )}
  />
);

export default Phone;
