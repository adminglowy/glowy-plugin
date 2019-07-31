import { scrollTo } from '../utils/scroll-to'
import { FrameActionContext } from './types'

export function onRouteChange (this: FrameActionContext) {
  scrollTo(this.scrollContainer, (this.frame.offsetTop || this.frame.clientTop) - this.scrollOffset, 0)
}

export default onRouteChange
