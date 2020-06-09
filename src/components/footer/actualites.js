//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"
import React from "react";
import Slider from "react-slick";




const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false

  };

const Actualites = () => (

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

    <div className="container-fluid absolute">
      <div className="col-lg-6 col-md-12 padding">
         <div className="footer-slider">
         <Slider {...settings}>
         <div className="slide">
         <div className="overlay"></div>
         <div className="wrapper">
            <div className="desc">
               <div className="slide-title">
                  <h2>Actualités</h2>
               </div>
               <div className="slide-desc">
                  <p>Invesstissement immobilier 5 bons plans à Rabat</p>
               </div>
            </div>
         </div>
      </div>
      <div className="slide">
      <div className="overlay"></div>
      <div className="wrapper">
         <div className="desc">
            <div className="slide-title">
               <h2>Actualités 2</h2>
            </div>
            <div className="slide-desc">
               <p>Invesstissement immobilier 5 bons plans à Rabat</p>
            </div>
         </div>
      </div>
   </div>
          </Slider>
         </div>
         <div className="arrows">
            <ul>
               <li className="prev"><img src="https://www.theastro.co/les-perles/assets/images/logos/left.svg" alt="/"/></li>
               <li className="next"><img src="https://www.theastro.co/les-perles/assets/images/logos/right.svg" alt="/"/></li>
            </ul>
         </div>
      </div>
   </div>

   )}
   />
 )

        export default Actualites;
