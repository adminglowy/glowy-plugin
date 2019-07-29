import { scrollTo } from '../utils/scroll-to'

export function onRouteChange (this: ActionContext) {
  scrollTo(this.html, (this.component.offsetTop || this.component.clientTop) - this.headerOffset, 0)
}

export default onRouteChange
