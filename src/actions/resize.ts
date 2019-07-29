export function onResize (this: ActionContext, { height }: { height: number }) {
  this.frame.style.height = `${height}px`
}

export default onResize
