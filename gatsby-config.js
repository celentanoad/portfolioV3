module.exports = {
  siteMetadata: {
    title: `Alanna Celentano`,
    description: `Software Developer located in Austin, TX`,
    author: `Alanna Celentano`,
    keywords: `Alanna Celentano, portfolio, web developer, software engineer, technology`,
    image: `https://i.imgur.com/vjquhAy.png`,
    imageAlt: `Alanna Celentano: Software Developer, Problem Solver, Innovator`
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
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
