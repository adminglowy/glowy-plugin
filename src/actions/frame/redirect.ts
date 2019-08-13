import { FrameActionContext } from './types'

export function onRedirect (this: FrameActionContext, payload?: { url?: string }) {
  if (!payload || !payload.url) {
    return
  }

  window.location.href = payload.url
}

export default onRedirect
