import { shadeColor } from 'utils'

export default {
  box: color => `${shadeColor(color, 50)}5 0px 20px 25px, ${shadeColor(color, 50)}75 0px 0px 0px 5px`,
  text: color => `0 5px 35px ${color}15`,
}
