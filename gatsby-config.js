/* eslint-disable no-undef */
const packageJson = require('./package.json')

const config = {
  name: packageJson.name,
  title: packageJson.title,
  titleShort: packageJson.titleShort,
  description: packageJson.description,
  author: packageJson.author.name,
  keywords: packageJson.keywords.join(', '),
  url: packageJson.homepage,
  version: packageJson.version,
  themeColor: '#24292e',
  language: 'en',
  image: 'avatar.svg',
}

module.exports = {
  siteMetadata: config,
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: `${__dirname}/src/images/${config.image}`,
        appName: config.titleShort,
        appDescription: config.description,
        developerName: config.author,
        developerURL: config.url,
        lang: config.language,
        background: '#fafbfc',
        theme_color: config.themeColor,
        version: config.version,
        start_url: '/',
        dir: 'auto',
        display: 'standalone',
        orientation: 'any',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          firefox: true,
          windows: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
  ],
}
