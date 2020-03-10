import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'dark',
  fonts: {
    base: fonts.sans,
    title: fonts.mono,
  },
  colors: {
    accent: colors.orange,
    backgrounds: [colors.blueBlack, colors.blueGray],
    shapes: [colors.grayDarkest, colors.grayDarker, colors.grayDark],
    texts: [colors.white, colors.grayLighter, colors.grayLight],
  },
}
