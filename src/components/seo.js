import React from "react"
import Helmet from "react-helmet"
import {graphql, useStaticQuery} from "gatsby"
import {Location} from '@reach/router';
import {getOpenGraphMetadata, getTwitterMetadata} from './helpers/metadataHelpers';
import PropTypes from 'prop-types';

const siteMetadataQuery = graphql`
  query {
    file(relativePath: {eq: "logo-square.svg"}) {
   publicURL
 }
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

export const SEO = ({title,description, lang = 'fr', meta = [],titlefb ,descriptionFb,imageFb,titletwitter,descriptionTwitter,imageTwitter
}) => {
  const {site, file} = useStaticQuery(siteMetadataQuery);
  const metaDescription = description || site.siteMetadata.description;
  const metaDescriptionFb = descriptionFb || metaDescription;
  const metaDescriptionTwitter = descriptionTwitter || metaDescription;
  const titleFbop = titlefb || title;
  const titleTwitterop = titletwitter || title;

  return (
    <Location>
      {({location}) => (
        <Helmet
          htmlAttributes={{lang}}
          title={title}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          meta={[
            {name: `description`, content: metaDescription},
            ...getOpenGraphMetadata(site, titleFbop, metaDescriptionFb, location,imageFb),
            ...getTwitterMetadata(site, titleTwitterop, metaDescriptionTwitter,imageTwitter),
            ...meta,
          ]}/>
      )}
    </Location>
  )
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,

  titlefb: PropTypes.string,
  descriptionFb: PropTypes.string,

  titletwitter: PropTypes.string,
  descriptionTwitter: PropTypes.string,


  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string.isRequired
      })
    })
  }),
  meta: PropTypes.array
};
