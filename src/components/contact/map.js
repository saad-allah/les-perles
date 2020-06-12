import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";
import Slider from "react-slick";


const Map = () => (

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
    <>
    <div className="map">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12">
                  <div id='map'></div>
                  <div id='menu'>
                  </div>
               </div>
            </div>
         </div>
      </div>
</>

      )
    )}
  />
);

export default Map;
