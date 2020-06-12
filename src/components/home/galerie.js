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
const GaleriesHome = () => (

    <StaticQuery
    query={graphql`
      query GetHomeGaleriesSlider {
      wordpressAcfPages(wordpress_id: {eq:  2}) {
      id
      acf {
        home_galerie_title
        home_galerie_desc_bloc_1
        home_galerie_desc_bloc_2
        home_galerie_button

      }
      }
      allWordpressWpGaleries(limit: 10) {
   nodes {
     acf {
       featured_image_for_this_galerie {
         alt_text
         source_url
         localFile {
           id
           size
           childImageSharp {
             id
           }
         }
       }
     }
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
                 <div className="col-sm-12">
                     <div className="title">
                         <h2>{data.wordpressAcfPages.acf.home_galerie_title}</h2>
                     </div>
                     <div className="desc">
                          <p>{data.wordpressAcfPages.acf.home_galerie_desc_bloc_1}</p>
                            <p>{data.wordpressAcfPages.acf.home_galerie_desc_bloc_2}</p>
                     </div>
                 </div>
             </div>
         </div>
         <Slider className="galerie-slider" {...settings}>
  {data.allWordpressWpGaleries.nodes.map(({ node }) => (
             <div className="slide">
                 <div className="image">
                     <img src="https://theastro.co/les-perles/assets/images/7.jpg" alt="/"/>
                 </div>
             </div>
  ))}
         </Slider>
         <div className="galeries-button">
             <Link className="button" to="/galerie">{data.wordpressAcfPages.acf.home_galerie_button}</Link>
         </div>
     </div>

      )
    )}
  />
);

export default GaleriesHome;
