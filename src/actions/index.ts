import resize from './resize'
import routeChange from './route-change'
import scrollTo from './scroll-to'
import scrollToView from './scroll-to-view'

interface ActionFunctions {
  [name: string]: ActionFunction
}

const actions: ActionFunctions = {
  'resize': resize,
  'route_change': routeChange,
  'scroll_to': scrollTo,
  'scroll_to_view': scrollToView
}

export default actions
