import { scrollTo } from '../../utils/scroll-to'
import { FrameActionContext } from './types'

export function onScrollTo (this: FrameActionContext, { top, duration }: { top: number, duration: number }) {
  scrollTo(this.scrollContainer, (this.frame.offsetTop || this.frame.clientTop) + top - this.scrollOffset, duration)
}

export default onScrollTo
