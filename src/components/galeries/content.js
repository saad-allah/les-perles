import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentGaleries
      {
        wordpressPage(wordpress_id: {eq:  14}) {
           content
        }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div className="col-md-12">
                            <div className="title">
                                <h2>Galerie</h2>
                            </div>
                            <div className="desc">
                                <p>Une sélection d'images de nos appartements hat standing. Découvrez votre nouveay bien
                                    immobilier de plus prés</p>
                            </div>
                        </div>

      )
    )}
  />
);

export default Paragraph;
