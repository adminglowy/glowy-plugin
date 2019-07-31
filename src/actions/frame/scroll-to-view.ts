import { FrameActionContext } from './types'
import { scrollTo } from '../../utils/scroll-to'

export function onScrollToView (this: FrameActionContext, payload?: { top?: number, bottom?: number, duration?: number }) {
  if (!payload || !payload.top || !payload.bottom || !payload.duration) {
    return
  }

  const { top, bottom, duration } = payload
  const [elTop, elBottom] = [this.frame.offsetTop + top, this.frame.offsetTop + bottom]
  const [viewTop, viewBottom] = [this.scrollContainer.scrollTop + this.scrollOffset, this.scrollContainer.scrollTop + window.innerHeight]

  let diff = 0

  if (elTop < viewTop) {
    diff = elTop - viewTop - 20
  } else if (elBottom > viewBottom) {
    diff = elBottom - viewBottom + 20
  }

  if (diff === 0) {
    return
  }

  scrollTo(this.scrollContainer, this.scrollContainer.scrollTop + diff, duration)
}

export default onScrollToView
