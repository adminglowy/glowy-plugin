import { FrameActionContext, FrameActionFunction } from './types'

import resize from './resize'
import routeChange from './route-change'
import scrollTo from './scroll-to'
import scrollToView from './scroll-to-view'

const actions: { [name: string]: FrameActionFunction } = {
  'resize': resize,
  'route_change': routeChange,
  'scroll_to': scrollTo,
  'scroll_to_view': scrollToView
}

export function exec (context: FrameActionContext, action: string, payload: object) {
  if (!actions.hasOwnProperty(action)) {
    return false
  }

  actions[action].call(context, payload)

  return true
}

export default exec
