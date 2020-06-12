//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql,Link } from "gatsby"
import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";




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
        allWordpressPost(limit: 2, sort: { fields: [date], order: DESC }) {
          edges {
            node {
              date(formatString: "DD, MMM YYYY")
              title
              excerpt
              author {
                name
              }
              categories {
                id
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    id
                    sizes(maxWidth: 1000) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              slug
            }
          }
        }
      }
    `}
    render={(data)=> (

    <div className="container-fluid absolute">
      <div className="col-lg-6 col-md-12 padding">
         <div className="footer-slider">
         <Slider {...settings}>
        {data.allWordpressPost.edges.map(({ node }) => (
         <div className="slide" key={node.slug}>
           <Link
                to={`/actualites/${node.slug}`}
                className='linkto'
              />

         <div className="overlay">
         </div>
         {node.featured_media && (
           <Img
             src={
               node.featured_media.localFile.childImageSharp.sizes
                 .src
             }
             sizes={
               node.featured_media.localFile.childImageSharp.sizes
             }
             alt="blog_image_one"
             className="banner-img"
           />
         )}
         <div className="wrapper">
            <div className="desc">
               <div className="slide-title">
                  <h2   dangerouslySetInnerHTML={{ __html: node.title }}/>
               </div>
               <div className="slide-desc">
                  <p>Invesstissement immobilier 5 bons plans à Rabat</p>
               </div>
            </div>
         </div>

      </div>
  ))}
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
