import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Slider from "react-slick";

const settings = {
  swipe: true,

       dots: true,

       swipeToSlide: true,

       infinite: true,

       arrows: false,

       loop: true,

       autoplay: true,

       draggable: true,

       autoplaySpeed: 2000,

       centerMode: true,

       centerPadding: '250px',

       slidesToShow: 2,

       slidesToScroll: 4,
       responsive: [



        {

          breakpoint: 2500,

          settings: {

            mobileFirst: true,

            dots: true,

            centerMode: true,

            centerPadding: '250px',

            slidesToShow: 4,

            slidesToScroll: 1,

          }

        },
        {
          breakpoint: 1800,

          settings: {

            mobileFirst: true,

            dots: true,

            centerMode: true,

            centerPadding: '250px',

            slidesToShow: 2,

            slidesToScroll: 1,

          }

        },

        {

          breakpoint: 1285,

          settings: {

            mobileFirst: true,

            dots: true,
            centerMode: true,

            centerPadding: '200px',

            slidesToShow: 2,

            slidesToScroll: 1,

            swipeToSlide: true,

          }

        },

        {

          breakpoint: 1100,

          settings: {
            dots: true,

            mobileFirst: true,


            centerMode: true,

            centerMode: true,

            centerPadding: '150px',

            slidesToShow: 2,

            slidesToScroll: 1,

            swipeToSlide: true,

          }

        },

        {

          breakpoint: 900,

          settings: {


            dots: true,

            centerMode: true,

            centerMode: true,

            centerPadding: '100px',

            slidesToShow: 2,

            slidesToScroll: 1,

            swipeToSlide: true,

          }

        },
        {





          breakpoint: 790,

          settings: {
            dots: true,
            swipe: true,

            centerMode: true,

            centerPadding: '200px',

            slidesToShow: 1,

            slidesToScroll: 1,

            swipeToSlide: true,

          }
        },
        {





          breakpoint: 650,

          settings: {
            dots: true,
            swipe: true,

            //centerMode: true,

            centerPadding: '100px',

            slidesToShow: 1,

            slidesToScroll: 1,

            swipeToSlide: true,

          }
        },


        {



          breakpoint: 500,

          settings: {
            dots: true,
            swipe: true,

            centerMode: true,

            centerPadding: '50px',

            slidesToShow: 1,

            slidesToScroll: 1,

            swipeToSlide: true,

          }

        }

      ]



  }
const Galeries = () => (

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
      <div className="galeries">
         <div className="container">
             <div className="row     justify-content-center">
                 <div className="col-sm-10">
                     <div className="title">
                         <h2>Galeries</h2>
                     </div>
                     <div className="desc">
                         <p>Des intérieurs harmonieux, Des superficies divérsifiées</p>
                         <p>Découvrez une séléction de photos de nos appartements</p>
                     </div>
                 </div>
             </div>
         </div>
         <Slider className="galerie-slider" {...settings}>
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/7.jpg" alt="/"/>
                 </div>
             </div>
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/8.jpg" alt="/"/>
                 </div>
             </div>
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/9.jpg" alt="/"/>
                 </div>
             </div>
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/10.jpg" alt="/"/>
                 </div>
             </div>
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/7.jpg" alt="/"/>
                 </div>
             </div>
         </Slider>
         <div className="galeries-button">
             <Link className="button" to="/">En savoir plus</Link>
         </div>
     </div>

      )
    )}
  />
);

export default Galeries;
