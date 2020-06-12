import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";

import Left from "../../images/left-arrow.svg";
import Right from "../../images/right-arrow.svg";


const ListApp3 = () => (
  <StaticQuery
    query={graphql`
      query MyQuery3 {
        allWordpressWpAppartement(limit: 3) {
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
                               <h3>Type : F4+</h3>
                           </div>
                       </div>
                       {data.allWordpressWpAppartement.edges.map(({ node }, i) => (
        <div className="col-lg-4 col-md-6 col-12 solo wrapped-here">
               <div className="img">
                   <img src="https://theastro.co/les-perles/assets/images/app2.jpg" alt="/"/>

               </div>
               <div className="text">
                   <p><span>Type : </span> F3 </p>
                   <p><span>Superficie totale : </span>{node.acf.superficie_totale}</p>
                   <p><span>Section : </span> {node.acf.section}</p>
                   <Link className="buttons" to={`/appartements/${node.slug}`}> En savoir plus</Link>
               </div>
           </div>
                ))}


</>

      )
    )}
  />
);

export default ListApp3;
