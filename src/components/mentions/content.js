import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentMentions
      {
        wordpressPage(wordpress_id: {eq: 309}) {
           content
        }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div class="mentions-legales">
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

export default Paragraph;
