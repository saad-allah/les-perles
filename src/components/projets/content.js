import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentProjet
      {
        wordpressPage(wordpress_id: {eq:  10}) {
           content
        }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div className="projet-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Projet et concept</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


      )
    )}
  />
);

export default Paragraph;
