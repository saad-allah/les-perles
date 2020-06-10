import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/contact/banner";
import Paragraph from "../components/contact/content";
import ContactForm from "../components/contact/contactForm";
import ContactImg from "../components/contact/contactImg";
import Adresse from "../components/contact/adress";
import Phone from "../components/contact/phone";
import Email from "../components/contact/email";
export default ({ data }) => {
  return (
    <Layout>
      <SEO
      title="test"
      description="test"
      />
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
</div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
