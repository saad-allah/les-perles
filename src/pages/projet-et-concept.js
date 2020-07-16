import React from "react";
import { graphql,Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/projets/banner";
import Content from "../components/projets/content";
import Map3D from "../components/projets/map3d";
import ListAppMap from "../components/projets/listAppMap";
import {SEO} from "../components/seo";
import Scripts from "../components/scripts/script";
import Scripts3D from "../components/scripts/scriptMap3D";
export default ({ data }) => {
  return (
    <Layout>
<Scripts />
<Scripts3D />
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
      <Content />
  <Map3D />
  <ListAppMap />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 10 }) {
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
