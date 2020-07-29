
module.exports = {
  siteMetadata: {
    title: `Les Perles de l'Agdal `,
    siteUrl: `https://lesperles.ma`,
    description: `Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques`,
    author: `@astro`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#037168`,
        theme_color: `#037168`,
        display: `minimal-ui`,
        icon: `src/images/lesperles-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
  resolve: "gatsby-plugin-react-svg",
  options: {
    rule: {
      include:`/assets/`,// See below to configure properly
    }
  }
},
{
   resolve: 'gatsby-plugin-robots-txt',
   options: {
     host: 'https://lesperles.ma',
     policy: [{ userAgent: '*', disallow: ['/'] }]
   }
 },
{
   resolve: `gatsby-plugin-nprogress`,
   options: {
     // Setting a color is optional.
     color: `#037168`,
     // Disable the loading spinner.
     showSpinner: true,
   },
 },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "admin.lesperles.ma",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://admin.lesperles.ma",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/appartement",
          "**/galeries",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/style",
          "**/users",
          "**/*/*/menus",
          "**/*/*/menu-locations",
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
