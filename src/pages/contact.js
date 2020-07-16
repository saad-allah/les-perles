import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {SEO} from "../components/seo";
import Banner from "../components/contact/banner";
import Paragraph from "../components/contact/content";
import ContactForm from "../components/contact/contactForm";
import ContactImg from "../components/contact/contactImg";
import Adresse from "../components/contact/adress";
import Phone from "../components/contact/phone";
import Email from "../components/contact/email";
import Maps from "../components/contact/map";
import Scripts from "../components/scripts/script";
import Scripts3D from "../components/scripts/scriptMap3D";
export default ({ data }) => {
  return (
    <Layout>
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
    <Scripts />
      <Scripts3D />
      <Banner />
      <div className='contact-wrapper'>
      <div className='container'>

<div className="row">
  <Paragraph />
    <ContactForm />
      <ContactImg />
      <Adresse />
      <Phone />
      <Email />

</div>
      </div>
            <Maps />
</div>

    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 16 }) {
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
