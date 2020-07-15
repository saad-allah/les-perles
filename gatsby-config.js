
module.exports = {
  siteMetadata: {
    title: `Les perles`,
    description: `Les Perles de l'Agdal est une résidence fermée et sécurisée qui vous propose des appartements R+6 R+8 dotés d'une architecture et design moderne pensés pour vous offrir des éspaces de vie à la fois reposants et pratiques`,
    author: `@astro`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    "resolve": "gatsby-plugin-excerpts",
    "options": {
        "sources": {
            "snippetBlocks": {
                "type": "htmlQuery",
                "sourceField": "html",
                "excerptSelector": ".custom-block.snippet .custom-block-body",
                "stripSelector": "a",
                "elementReplacements": [
                    {
                        "selector": "h6",
                        "replaceWith": "strong"
                    },
                    {
                        "selector": "h5",
                        "replaceWith": "h6"
                    },
                    {
                        "selector": "h4",
                        "replaceWith": "h5"
                    },
                    {
                        "selector": "h3",
                        "replaceWith": "h4"
                    },
                    {
                        "selector": "h2",
                        "replaceWith": "h3"
                    },
                ],
            },
            "default": {
                "type": "htmlQuery",
                "sourceField": "html",
                "excerptSelector": "html > *",
                "ignoreSelector": "img, .gatsby-highlight",
                "stripSelector": "a",
                "elementReplacements": [
                    {
                        "selector": "h6",
                        "replaceWith": "strong"
                    },
                    {
                        "selector": "h5",
                        "replaceWith": "h6"
                    },
                    {
                        "selector": "h4",
                        "replaceWith": "h5"
                    },
                    {
                        "selector": "h3",
                        "replaceWith": "h4"
                    },
                    {
                        "selector": "h2",
                        "replaceWith": "h3"
                    },
                ],
                "truncate": {
                    "length": 10,
                    "byWords": true,
                    "ellipsis": "…"
                },
            }
        },
        "sourceSets": {
            "markdownHtml": [
                "snippetBlocks",
                "default"
            ]
        },
        "excerpts": {
            "snippet": {
                "type": "html",
                "nodeTypeSourceSet": {
                    "MarkdownRemark": "markdownHtml"
                }
            }
        }
    },
},
{
    "resolve": "gatsby-remark-custom-blocks",
    "options": {
        "blocks": {
            "snippet": {
                "classes": "snippet"
            },
        },
    },
}, {
    resolve: `gatsby-transformer-remark`,
    options: {
      tableOfContents: {
        heading: null,
        maxDepth: 6,
      },
    },
  },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "les-perles.theastro.co",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://les-perles.theastro.co",
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
