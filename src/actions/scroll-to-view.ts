import { scrollTo } from '../utils/scroll-to'

export function onScrollToView (this: ActionContext, { top, bottom, duration }: { top: number, bottom: number, duration: number }) {
  scrollTo(this.html, (this.component.offsetTop || this.component.clientTop) + top - this.headerOffset, duration)
}

export default onScrollToView
