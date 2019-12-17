import Global from './_global'
import animations from './_animations'
import colors from './_colors'
import screens from './_screens'
import shadows from './_shadows'

// Available themes: dark light red
import dark from './dark'
import light from './light'

export default [dark, light].map(theme => ({
  Global,
  animations,
  shadows: shadows(theme),
  ...colors,
  ...screens,
  ...theme,
}))
