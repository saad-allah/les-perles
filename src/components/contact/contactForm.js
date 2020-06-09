import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const ContactForm = () => (

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
      <div className="col-lg-6 col-md-12 col-12"><div className="form">
        <form><div className="form-group">
          <input type="text" className="form-control" id="nom-complet" placeholder="Nom complet"/></div>
          <div className="form-group"><input type="email" className="form-control" id="email" placeholder="Adresse email"/></div>
          <div className="form-group"><input type="tel" className="form-control" id="phone" placeholder="Télephonne"/></div>
          <div className="form-group"><textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea></div>
          <div className="submit"><button type="submit" className="btn btn-primary mb-2 submit">Envoyer</button></div></form></div></div>

      )
    )}
  />
);

export default ContactForm;
