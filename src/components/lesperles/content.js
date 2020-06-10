import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentLesperles
      {
        wordpressAcfPages(wordpress_id: {eq:  12}) {

           acf {
             perles_de_lagdal_title

           }
        }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div className="col-md-12">
                            <div className="title vivre">
                              <h2>{data.wordpressAcfPages.acf.perles_de_lagdal_title} </h2>
                            </div>
                        </div>


      )
    )}
  />
);

export default Paragraph;
