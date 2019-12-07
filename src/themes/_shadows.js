import { shadeColor } from 'utils'

export default theme => ({
  box: `${shadeColor(theme.accent, 50)}5 0px 20px 25px, ${shadeColor(theme.accent, 50)}75 0px 0px 0px 5px`,
  text: `0 5px 35px ${theme.accent}15`,
})
