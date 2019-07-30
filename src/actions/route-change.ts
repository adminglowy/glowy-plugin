import { scrollTo } from '../utils/scroll-to'

export function onRouteChange (this: ActionContext) {
  scrollTo(this.html, (this.frame.offsetTop || this.frame.clientTop) - this.headerOffset, 0)
}

export default onRouteChange
