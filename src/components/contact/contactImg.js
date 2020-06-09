import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const ContactImg = () => (

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
        <div className="col-lg-6 col-md-12 col-12">
                        <div className="image">
                            <img src="https://theastro.co/les-perles/assets/images/contact-img.jpg" alt="/"/>
                        </div>
                    </div>

      )
    )}
  />
);

export default ContactImg;
