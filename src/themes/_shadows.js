import { shadeColor } from 'utils'

export default {
  boxShadow: color => `${shadeColor(color, 50)}5 0px 20px 25px, ${shadeColor(color, 50)}75 0px 0px 0px 5px`,
  textShadow: color => `0 5px 35px ${color}15`,
}
