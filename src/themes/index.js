import GlobalStyle from './_global'
import animations from './_animations'
import colors from './_colors'
import screens from './_screens'
import shadows from './_shadows'

// Available themes: dark light
import dark from './dark'
import light from './light'

export default [dark, light].map(theme => ({
  GlobalStyle,
  ...animations,
  ...colors,
  ...shadows,
  ...screens,
  ...theme,
}))
