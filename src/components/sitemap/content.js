import { StaticQuery, graphql,Link } from "gatsby";
import React from "react";



const Paragraph = () => (
  <StaticQuery
    query={graphql`
      query GetContentSiteMap
      {
        wordpressAcfPages(wordpress_id: {eq: 18}) {
      acf {
        sitemap_img {
          url {
            source_url
            alt_text
          }
        }
      }
    }
      }

    `}
    render={data => (
      console.log(data),
      (
        <div class="sitemap">

                <div class="container">
                    <div class="row">
                          <div class="col-12">
                      <img
          src={data.wordpressAcfPages.acf.sitemap_img.url.source_url}
          alt={data.wordpressAcfPages.acf.sitemap_img.url.alt_text}
        />

  </div>
    </div>
</div>
</div>


      )
    )}
  />
);

export default Paragraph;
