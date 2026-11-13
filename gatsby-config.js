module.exports = {
  
  pathPrefix: `/wedding`,
  siteMetadata: {
    title: `Marie & Arthur`,
    googleVerification: `abcdefz`,
    disqus: `gatsby-typescript`
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson.jsonId`
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },


    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "follow"
            }
          }
        ]
      }
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // TypeScript est pris en charge nativement par Gatsby 5.
    // Styles styled-components rendus côté serveur (HeroImage)
    `gatsby-plugin-styled-components`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marie & Arthur`,
        short_name: `Marie & Arthur`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`
  ]
};
