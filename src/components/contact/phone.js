import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Phone = () => (

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
                                <img src="https://theastro.co/les-perles/assets/images/logos/phone-contact.svg" alt="/"/>
                                <p>060606060606</p>
                            </div>
                        </div>

      )
    )}
  />
);

export default Phone;
