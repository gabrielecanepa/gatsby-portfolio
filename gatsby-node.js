/* eslint-disable no-undef */
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Enable absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
  // Fix hot-reload warning (see https://github.com/gatsbyjs/gatsby/issues/11934)
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
