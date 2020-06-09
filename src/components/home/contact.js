import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Contact = () => (

    <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Menu Nav" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      console.log(data),
      (
        <div className="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-sm-10'>
<div className='row'>
  <div className="col-md-12">
      <div className="title">
          <h2>Contactez-nous</h2>
      </div>
      <div className="desc">
          <p>Besoins de plus d'informations sur votre nouvelle résidence ?</p>
          <p>Choisissez le moyen de contact qui vous convient</p>
      </div>
  </div>
  <div className="col-lg-4 col-sm-4 col-12">
      <div className="wrapper">
          <div className="icon">
              <img src="https://theastro.co/les-perles/assets/images/logos/mail.svg" alt="/"/>
          </div>
          <div className="text">
              <p>Envoyez nous un message</p>
              <a href="mailto:Perlesdel'agdal@contact.com">Perlesdel'agdal@contact.com</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-sm-4 col-12">
      <div className="wrapper">
          <div className="icon">
              <img src="https://theastro.co/les-perles/assets/images/logos/call.svg" alt="/"/>
          </div>
          <div className="text">
              <p>Contactez nous par téléphone</p>
              <a href="tel:+21206060606060">0606060606</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-sm-4 col-12">
      <div className="wrapper">
          <div className="icon">
              <img src="https://theastro.co/les-perles/assets/images/logos/pin.svg" alt="/"/>
          </div>
          <div className="text">
              <p>Visitez nos showrooms</p>
              <a href="mailto:Perlesdelagdal@contact.com">Perlesdelagdal@contact.com</a>
          </div>
      </div>
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

export default Contact;
