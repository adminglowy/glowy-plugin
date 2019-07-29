import { scrollTo } from '../utils/scroll-to'

export function onScrollTo (this: ActionContext, { top, duration }: { top: number, duration: number }) {
  scrollTo(this.html, (this.component.offsetTop || this.component.clientTop) + top - this.headerOffset, duration)
}

export default onScrollTo
