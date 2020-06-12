import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const ContactHome = () => (

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
  <div className="col-lg-4 col-md-6 col-12">
      <div className="wrapper">
          <div className="icon">
              <img src="https://theastro.co/les-perles/assets/images/logos/mail.svg" alt="/"/>
          </div>
          <div className="text">
              <p>Envoyez nous un message</p>
              <a href="mailto:contact@lesperles.ma">contact@lesperles.ma</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
      <div className="wrapper">
          <div className="icon">
              <img src="https://theastro.co/les-perles/assets/images/logos/call.svg" alt="/"/>
          </div>
          <div className="text">
              <p>Contactez nous par téléphone</p>
              <a href="tel:+212529035035">+212 529 035 035</a>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
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


      )
    )}
  />
);

export default ContactHome;
