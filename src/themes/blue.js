import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'blue',
  fonts: {
    base: fonts.sans,
    title: fonts.mono,
    mono: fonts.mono,
  },
  colors: {
    accent: colors.blueDark,
    backgrounds: [colors.blue, colors.blueDark],
    shapes: [colors.yellowDark, colors.orange, colors.redDark],
    texts: [colors.white, colors.grayLighter, colors.grayLight],
  },
}
