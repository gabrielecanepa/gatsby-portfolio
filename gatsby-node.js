/* eslint-disable no-undef */
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Fix hot-reload warnings (https://github.com/gatsbyjs/gatsby/issues/11934)
        'react-dom': stage.startsWith('develop') ? '@hot-loader/react-dom' : 'react-dom',
      },
      // Enable absolute imports
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
