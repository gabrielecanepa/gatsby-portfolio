import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'blue',
  fonts: {
    base: fonts.sans,
    title: fonts.mono,
    mono: fonts.mono,
  },
  // colors
  accent: colors.blue,
  foregrounds: [colors.white, colors.grayLighter, colors.grayLight],
  backgrounds: [colors.blueDarkest, colors.blue],
  shapes: [colors.yellowDark, colors.orange, colors.redDark],
}
