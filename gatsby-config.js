const dynamicPlugins = []
// pick data from 3 months ago
const startDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)
if(process.env.CLIENT_EMAIL && process.env.PRIVATE_KEY && process.env.GA_VIEW_ID) {
    dynamicPlugins.push({
      resolve: `gatsby-plugin-guess-js`,
      options: {
        GAViewID: process.env.GA_VIEW_ID,
        jwt: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: process.env.PRIVATE_KEY,
        },
        period: {
          startDate,
          endDate: new Date(),
        },
      },
    })
}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.mikeyhilker.com',
    title: `Mikey Hilker`,
    description: `There's only one Mikey Hilker!`,
    author: `his friends and family`,
    url: "https://www.mikeyhilker.com", // No trailing slash allowed!
    image: "../images/mikeyLogo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mikeyhilker`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60677648-2",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/*`],
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt'
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     // Find the view id in the GA admin in a section labeled "views"
    //     GAViewID: `212478457`,
    //     // Add a JWT to get data from GA
    //     // jwt: {
    //     //   client_email: `mikeyhilker@myproject-270012.iam.gserviceaccount.com`,
    //     //   private_key: `fa75779081bacf0a2c6a5c8bf5a0fc5e1b4ff69a`,
    //     // },
    //     minimumThreshold: 0.03,
    //     // The "period" for fetching analytic data.
    //     period: {
    //       startDate: new Date("2020-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
  ].concat(dynamicPlugins)
}
