import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraphpdc = () => (
  <StaticQuery
    query={graphql`
      query GetContentPdc
      {
        wordpressPage(wordpress_id: {eq:  3}) {
           content
        }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div class="politique-de-confidentialite">
                <div class="underlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="indexed"    dangerouslySetInnerHTML={{
                             __html: data.wordpressPage.content
                           }}
               />
  </div>
</div>
</div>


      )
    )}
  />
);

export default Paragraphpdc;
