import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'red',
  fonts: {
    base: fonts.sans,
    title: fonts.serif,
    mono: fonts.mono,
  },
  // colors
  accent: colors.red,
  foregrounds: [colors.white, colors.grayLighter, colors.grayLight],
  backgrounds: [colors.black, colors.grayDarkest],
  shapes: [colors.white, colors.grayLightest, colors.grayLighter],
}
