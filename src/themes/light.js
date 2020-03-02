import colors from './_colors'
import fonts from './_fonts'

export default {
  name: 'light',
  fonts: {
    base: fonts.sans,
    title: fonts.mono,
  },
  // colors
  accent: colors.blue,
  foregrounds: [colors.blueBlack, colors.blueGray, colors.grayDarkest],
  backgrounds: [colors.white, colors.grayLightest],
  shapes: [colors.grayLighter, colors.grayLight, colors.gray],
}
