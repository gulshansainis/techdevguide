module.exports = {
  siteMetadata: {
    title: 'Techdevguide',
    author: 'Gulshan Saini',
    description: 'Personal blog by Gulshan Saini. For developer by developer.',
    siteUrl: 'https://techdevguide.com',
    social: {
      twitter: '@gulshansainis',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131350562-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Techdevguide`,
        short_name: `Techdevguide`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#423884`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        icons: [
          {
            src: 'favicons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-offline`
  ],
}
