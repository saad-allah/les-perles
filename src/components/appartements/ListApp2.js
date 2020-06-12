import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";

import Left from "../../images/left-arrow.svg";
import Right from "../../images/right-arrow.svg";


const ListApp1 = () => (
  <StaticQuery
    query={graphql`
      query MyQuery2 {
        allWordpressWpAppartement(limit: 4) {
          edges {
            node {
              id
              acf {
                featured_image {
                  source_url
                  alt_text
                }
                section
                superficie_totale
                contactez_nous_button
              }
              slug
              title
            }
          }
        }
      }
  `}
    render={data => (
      console.log(data),
      (
<>

                       <div className="col-md-12">
                           <div className="title small">
                               <h3>Type : F3</h3>
                           </div>
                       </div>
                       <div className="col-md-10 wrapped-here">
                           <div className="slider-app2">
                             {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
                 <div className="slide">
                     <div className="img">
                         <img src="https://theastro.co/les-perles/assets/images/app3.jpg" alt="/"/>

                     </div>
                     <div className="text">
                         <p><span>Type : </span> F3 </p>
                         <p><span>Superficie totale : </span>{node.acf.superficie_totale}</p>
                         <p><span>Section : </span> {node.acf.section}</p>
                         <Link className="buttons" to={`/appartements/${node.slug}`}> En savoir plus</Link>
                     </div>
                 </div>
                      ))}

                           </div>
                           <div className="arrows">
                               <ul>
                                 <li className="prev5"><img src='https://theastro.co/les-perles/assets/images/logos/arrow-leftb.svg' alt="/"/></li>
                                 <li className="next5"><img src='https://theastro.co/les-perles/assets/images/logos/arrow-rightb.svg' alt="/"/></li>
                               </ul>
                           </div>
                       </div>
                </>

      )
    )}
  />
);

export default ListApp1;
