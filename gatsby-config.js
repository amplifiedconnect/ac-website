module.exports = {
  siteMetadata: {
    title: "Amplified Connect",
    author: "Andrew McFadden",
    description: "Amplified Connect Marketing Site"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/Amplified_Connect-icon-logo-wht.png', // This path is relative to the root of the site.
      resolve: "gatsby-plugin-hubspot",
          options: {
              trackingCode: "6728858",
              respectDNT: true,
              productionOnly: true,
          }
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
      ]
}
