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
        <div className="section1">
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                    <div className="paragraph">
                        <p>Appartements haut standing situé en plein centre-ville, le projet Les Perles de l'Agdal vous
                            propose une
                            large gamme d'immobilier haut standing : appartements d'exeption aux finitions de premier
                            choix,
                            pour toute
                            personne désirant devenir propriétaire d'un bien immobilier de qualité</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
      )
    )}
  />
);

export default Paragraph;
