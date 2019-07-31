import { scrollTo } from '../utils/scroll-to'
import { FrameActionContext } from './types'

export function onScrollToView (this: FrameActionContext, { top, bottom, duration }: { top: number, bottom: number, duration: number }) {
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
