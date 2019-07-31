import { FrameActionContext } from './types'

export function onResize (this: FrameActionContext, { height }: { height: number }) {
  this.frame.style.height = `${height}px`
}

export default onResize
