import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Slider from "react-slick";

export default  ({ data }) => {

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,

    }
    const settings_nav = {
      vertical: true,

            verticalSwiping: true,

            dots: false,

            swipeToSlide: true,

            infinite: true,

            arrows: false,

        //    prevArrow: $('.prev'),

          //  nextArrow: $('.next'),

            loop: true,

            autoplay: true,

            draggable: true,

            autoplaySpeed: 2000,

            centerMode: false,

            centerPadding: '0px',

            slidesToShow: 3,

            slidesToScroll: 1,
            responsive: [



                    {

                      breakpoint: 1445,

                      settings: {

                        mobileFirst: true,
                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                      }

                    },

                    {

                      breakpoint: 1285,

                      settings: {

                        mobileFirst: true,

                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }

                    },

                    {

                      breakpoint: 1100,

                      settings: {


                        mobileFirst: true,

                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }

                    },

                    {

                      breakpoint: 900,

                      settings: {


                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }

                    },
                    {





                      breakpoint: 790,

                      settings: {

                        swipe: true,

                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }
                    },

                    {



                      breakpoint: 768,

                      settings: {
                        vertical: false,

                  verticalSwiping: false,

                        swipe: true,
                        arrows: false,

                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 3,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }

                    },

                    {



                      breakpoint: 500,

                      settings: {
                        vertical: false,

                  verticalSwiping: false,

                        swipe: true,
                        arrows: false,

                        centerMode: false,

                        centerPadding: '0px',

                        slidesToShow: 2,

                        slidesToScroll: 1,

                        swipeToSlide: true,

                      }

                    }


                  ]
      }

  return (
    <div className="appartements">
       <div className="bg"></div>
       <div className="container">
        <div className='row'>

  <div className="col-sm-10">
  <div className="row">
  <div className="col-md-12">
      <div className="title">
          <h2>Appartements</h2>
      </div>
  </div>
  <div className="col-md-6 col-12">
      <Slider className="big-slider" {...settings}>
          <div className="slide">
              <div className="wrapper">
                  <img src="https://www.theastro.co/les-perles/assets/images/3.jpg" alt="/"/>

              </div>
          </div>
          <div className="slide">
              <div className="wrapper">
                  <img src="https://www.theastro.co/les-perles/assets/images/4.jpg" alt="/"/>

              </div>
          </div>
          <div className="slide">
              <div className="wrapper">
                  <img src="https://www.theastro.co/les-perles/assets/images/5.jpg" alt="/"/>

              </div>
          </div>
          <div className="slide">
              <div className="wrapper">
                  <img src="https://www.theastro.co/les-perles/assets/images/6.jpg" alt="/"/>

              </div>
          </div>
      </Slider>
  </div>
  <div className="col-md-2 col-10 small">
      <Slider className="small-slider"  {...settings_nav}>
          <div className="slide">
              <img src="https://www.theastro.co/les-perles/assets/images/3.jpg" alt="/"/>
          </div>
          <div className="slide">
              <img src="https://www.theastro.co/les-perles/assets/images/4.jpg" alt="/"/>
          </div>
          <div className="slide">
              <img src="https://www.theastro.co/les-perles/assets/images/5.jpg" alt="/"/>
          </div>
          <div className="slide">
              <img src="https://www.theastro.co/les-perles/assets/images/6.jpg" alt="/"/>
          </div>
      </Slider>
      <div className="arrows">
          <ul>
              <li className="prev2"><img src="https://www.theastro.co/les-perles/assets/images/logos/down.svg" alt="/"/></li>
              <li className="next2"><img src="https://www.theastro.co/les-perles/assets/images/logos/up.svg" alt="/"/></li>
          </ul>
      </div>
  </div>

  <div className="col-md-4 col-12">
      <div className="discover">
          <Link className="decouvrir" to="/appartements">
            Découvrir nos plans d'appartements <img
                  src="https://www.theastro.co/les-perles/assets/images/logos/right.svg" alt=""/></Link>
      </div>
  </div>
  </div>
  </div>
        </div>
       </div>
   </div>
  )
}



export const query = graphql`
query GetHomeAppSlider {
wordpressAcfPages(wordpress_id: {eq:  2}) {
id
acf {
home_appartements_title
home_appartements_link_text
home_appartements_link

}
}
}
`
