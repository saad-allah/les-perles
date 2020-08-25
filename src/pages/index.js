import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout-index";
import Banner from "../components/home/banner";
import Paragraph from "../components/home/content";
import ProjetF from "../components/home/projetF";
import ProjetS from "../components/home/projetS";
import Visite from "../components/home/virtuelle";
import Appratements from "../components/home/appratement";
import Galerie from "../components/home/galerie";
import Contact from "../components/home/contact";
import Scripts from "../components/scripts/script";
import {SEO} from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
          <Scripts />
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
  <Paragraph />
    <ProjetF />
        <ProjetS />
          <Visite />
                <Appratements />
                        <Galerie />
                                      <Contact />

    </Layout>
  );
};
export const pageQuery = graphql`
query {
  wordpressPage(wordpress_id: { eq: 2 }) {
    id
    title
    yoast {
      twitter_description
      twitter_image {
        source_url
        alt_text
        localFile {
          childImageSharp {
            resize(width: 1214, height: 500, quality: 100) {
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
            resize(width: 1214, height: 500, quality: 100) {
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
