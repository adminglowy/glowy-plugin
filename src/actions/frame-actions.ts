import { FrameActionContext, FrameActionFunction } from './frame/types'

import redirect from './frame/redirect'
import resize from './frame/resize'
import routeChange from './frame/route-change'
import scrollTo from './frame/scroll-to'
import scrollToView from './frame/scroll-to-view'

const actions: { [name: string]: FrameActionFunction } = {
  'resize': resize,
  'route_change': routeChange,
  'scroll_to': scrollTo,
  'scroll_to_view': scrollToView,
  'redirect': redirect
}

export function exec (context: FrameActionContext, action: string, payload: object) {
  if (!actions.hasOwnProperty(action)) {
    return false
  }

  actions[action].call(context, payload)

  return true
}

export default exec
