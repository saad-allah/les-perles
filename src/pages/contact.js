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
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
export default ({ data }) => {
  return (
    <Layout>
      <SEO
      title="Contact"
        description="Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques"
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
<Helmet>
  <script async src={withPrefix("file.js")} />
  </Helmet>
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
