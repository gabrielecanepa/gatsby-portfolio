import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'red',
  fonts: {
    base: fonts.sans,
    title: fonts.mono,
  },
  colors: {
    accent: colors.blueDark,
    backgrounds: [colors.red, colors.redDarker],
    shapes: [colors.white, colors.grayLightest, colors.grayLighter],
    texts: [colors.blueBlack, colors.blueGray, colors.grayDarkest],
  },
}
