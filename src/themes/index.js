import colors from './_colors'
import screens from './_screens'
import shadows from './_shadows'

// Available themes: dark light red
import dark from './dark'
import light from './light'

const themes = [dark, light]

export default themes.map(theme => ({
  ...colors,
  ...screens,
  ...theme,
  shadows: shadows(theme),
}))
