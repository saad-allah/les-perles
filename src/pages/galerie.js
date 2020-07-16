import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/galeries/banner";
import Paragraph from "../components/galeries/content";
import Galerie from "../components/galeries/galerie";
import SliderShow from "../components/galeries/imageCover";
import Scripts from "../components/scripts/script";
import {SEO} from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
<Scripts/>

<SEO
          title={data.wordpressPage.title}
          titlefb={data.wordpressPage.yoast.opengraph_title}
          titletwitter={data.wordpressPage.yoast.twitter_title}
          description={data.wordpressPage.yoast.metadesc}
          descriptionFb={data.wordpressPage.yoast.opengraph_description}
          descriptionTwitter={data.wordpressPage.yoast.twitter_description}
          imageFb={data.wordpressPage.yoast.opengraph_image.localFile.childImageSharp.resize.src}
          imageTwitter={data.wordpressPage.yoast.twitter_image.localFile.childImageSharp.resize.src}
          />

      <Banner />
      <div className="page-galerie">
        <div className="container">
          <div className="row">
            <Paragraph />
<SliderShow/>

<Galerie />
          </div>
        </div>
      </div>



    </Layout>
  );
};
export const pageQuery = graphql`
query {
  wordpressPage(wordpress_id: { eq: 14 }) {
    id
    title
    yoast {
      twitter_description
      twitter_image {
        source_url
        alt_text
        localFile {
          childImageSharp {
            resize(width: 1214, height: 1214, quality: 100) {
              height
              width
              src
            }
          }
        }
      }
      twitter_title
      opengraph_title
      opengraph_image {
        source_url
        alt_text
        localFile {
          childImageSharp {
            resize(width: 1214, height: 1214, quality: 100) {
              height
              width
              src
            }
          }
        }
      }
      opengraph_description
      metakeywords
      metadesc
    }
  }
}
`;
