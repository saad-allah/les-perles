import { StaticQuery, graphql } from "gatsby";
import React from "react";



const ParagraphSite = () => (
  <StaticQuery
    query={graphql`
      query GetContentSiteMap
      {
        wordpressAcfPages(wordpress_id: {eq: 18}) {
    id
    acf {
  sitemap_img {
    source_url
    alt_text
    localFile {
      id
      size
      childImageSharp {
        id
        sizes(maxWidth: 2000) {
           ...GatsbyImageSharpSizes
        }
      }
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
                              src={
                                data.wordpressAcfPages.acf.sitemap_img.localFile
                                  .childImageSharp.sizes.src
                              }
                              alt={data.wordpressAcfPages.acf.sitemap_img.alt_text}
                            />

  </div>
    </div>
</div>
</div>


      )
    )}
  />
);

export default ParagraphSite;
