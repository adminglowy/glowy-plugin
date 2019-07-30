import { scrollTo } from '../utils/scroll-to'

export function onScrollToView (this: ActionContext, { top, bottom, duration }: { top: number, bottom: number, duration: number }) {
  const [elTop, elBottom] = [this.frame.offsetTop + top, this.frame.offsetTop + bottom]
  const [viewTop, viewBottom] = [this.html.scrollTop + this.headerOffset, this.html.scrollTop + window.innerHeight]

  let diff = 0

  if (elTop < viewTop) {
    diff = elTop - viewTop - 20
  } else if (elBottom > viewBottom) {
    diff = elBottom - viewBottom + 20
  }

  if (diff === 0) {
    return
  }

  scrollTo(this.html, this.html.scrollTop + diff, duration)
}

export default onScrollToView
