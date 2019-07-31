import { FrameActionContext } from './types'

export function onResize (this: FrameActionContext, payload?: { height?: number }) {
  if (!payload || !payload.height) {
    return
  }

  const height = payload.height

  this.frame.style.height = `${height}px`
}

export default onResize
