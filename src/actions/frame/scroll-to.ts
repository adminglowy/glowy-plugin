import { FrameActionContext } from './types'
import { scrollTo } from '../../utils/scroll-to'

export function onScrollTo (this: FrameActionContext, payload?: { top?: number, duration?: number }) {
  if (!payload || !payload.top || !payload.duration) {
    return
  }

  const { top, duration } = payload

  scrollTo(this.scrollContainer, (this.frame.offsetTop || this.frame.clientTop) + top - this.scrollOffset, duration)
}

export default onScrollTo
