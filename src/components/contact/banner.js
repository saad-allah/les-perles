import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";


const Banner = () => (
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

        <div className="banner ">
        <img className="banner-img"
        src="https://www.theastro.co/les-perles/assets/images/banner.jpg" alt=""/>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-title nOm">
                        <h1>CONTACT</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
    )}
  />
);

export default Banner;
