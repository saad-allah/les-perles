import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
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
        <div className="col-md-12">
                      <div className="title">
                          <h2>Contact</h2>
                      </div>
                      <div className="desc">
                          <p>Désirez vous avoir plus d'informations sur votre nouvelle résidence ? Remplissez ce
                              formulaire de contact. Nous vous réponderont dans les meilleurs délais</p>
                      </div>
                  </div>

      )
    )}
  />
);

export default Paragraph;
