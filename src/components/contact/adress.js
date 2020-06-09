import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Adresse = () => (

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
        <div className="col-lg-4 col-md-6 col-12">
                        <div className="gryff">
                            <img src="https://theastro.co/les-perles/assets/images/logos/pin-map.svg" alt="/"/>
                            <p>Lorem 01 - ipsum dolor sit 12</p>
                        </div>
                    </div>

      )
    )}
  />
);

export default Adresse;
