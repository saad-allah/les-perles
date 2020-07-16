
export function getOpenGraphMetadata(site, title, metaDescription, location, image) {
  return [
    {property: `og:title`, content: title},
    {property: `og:description`, content: metaDescription},
    {property: `og:site_name`, content: site.siteMetadata.title},
    {property: `og:type`, content: `website`},
    {property: `og:locale`, content: `fr_FR`},
    {property: `og:url`, content: `${site.siteMetadata.siteUrl}${location.pathname}`},
    {property: `og:image`, content: `${image}`},
  ];
}

export function getTwitterMetadata(site, title, metaDescription, image) {
  return [
    {name: `twitter:card`, content: `summary`},
    {name: `twitter:creator`, content: site.siteMetadata.author},
    {name: `twitter:title`, content: title},
    {name: `twitter:description`, content: metaDescription},
    {name: `twitter:site`, content: site.siteMetadata.author},
    {name: `twitter:image`, content: `${image}`},
  ];
}
