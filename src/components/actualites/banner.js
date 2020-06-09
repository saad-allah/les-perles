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
 
        <div className="banner home">
        <img className="banner-img"
        src="https://www.theastro.co/les-perles/assets/images/banner.jpg" alt=""/>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-title">
                        <h1>Une situation idéale au coeur de la ville de Rabat</h1>
                    </div>
                    <div className="subtitle">
                        <p>Appartements d'exeption au finitions de premier choix</p>
                    </div>
                    <Link className="button" to="">Découvrir</Link>
                </div>
            </div>
        </div>
    </div>
      )
    )}
  />
);

export default Banner;
