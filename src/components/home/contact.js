import { StaticQuery, graphql } from "gatsby";
import React from "react";



const ContactHome = () => (

    <StaticQuery
    query={graphql`
      query {
  wordpressAcfPages(wordpress_id: {eq:  2}) {
            acf {
              home_contact_desc_bloc_1
      home_contact_desc_bloc_2
      home_contact_title
              Titre_icon_1
              Titre_icon_2
              Titre_icon_3
              adresse_home_contact
              email_page_home
              icon_adresse_home {
                source_url
                alt_text
              }
              icon_email_home {
                alt_text
                source_url
              }
              icon_phone_home {
                source_url
                alt_text
              }
              telephone_f_home
              telephone_home_contact
            }
          }
      }
    `}
    render={data => (
      (
        <div className="contact">
                <div className="container">

<div className='row'>
  <div className="col-md-12">
      <div className="title">
          <h2>{data.wordpressAcfPages.acf.home_contact_title}</h2>
      </div>
      <div className="desc">
                <p>{data.wordpressAcfPages.acf.home_contact_desc_bloc_2}</p>
              <p>{data.wordpressAcfPages.acf.home_contact_desc_bloc_1}</p>
      </div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
      <div className="wrapper">
          <div className="icon">
          <img
            src={data.wordpressAcfPages.acf.icon_email_home.source_url}
            alt={data.wordpressAcfPages.acf.icon_email_home.alt_text}
          />
          </div>
          <div className="text">
                      <p>{data.wordpressAcfPages.acf.Titre_icon_1}</p>
              <a href={`mailto:${data.wordpressAcfPages.acf.email_page_home}`}> {data.wordpressAcfPages.acf.email_page_home}</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
      <div className="wrapper">
          <div className="icon">
          <img
            src={data.wordpressAcfPages.acf.icon_phone_home.source_url}
            alt={data.wordpressAcfPages.acf.icon_phone_home.alt_text}
          />
          </div>
          <div className="text">
                    <p>{data.wordpressAcfPages.acf.Titre_icon_2}</p>
              <a href={`tel:${data.wordpressAcfPages.acf.telephone_home_contact}`}>{data.wordpressAcfPages.acf.telephone_f_home}</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
      <div className="wrapper">
          <div className="icon">
          <img
            src={data.wordpressAcfPages.acf.icon_adresse_home.source_url}
            alt={data.wordpressAcfPages.acf.icon_adresse_home.alt_text}
          />
          </div>
          <div className="text">
                    <p>{data.wordpressAcfPages.acf.Titre_icon_3}</p>
              <a href="#">{data.wordpressAcfPages.acf.adresse_home_contact}</a>
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

export default ContactHome;
