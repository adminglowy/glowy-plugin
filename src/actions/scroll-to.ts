import { scrollTo } from '../utils/scroll-to'

export function onScrollTo (this: ActionContext, { top, duration }: { top: number, duration: number }) {
  scrollTo(this.html, (this.frame.offsetTop || this.frame.clientTop) + top - this.headerOffset, duration)
}

export default onScrollTo
