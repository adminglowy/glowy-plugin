declare interface ActionContext {
  html: HTMLElement,
  headerOffset: number,
  container: HTMLElement,
  frame: HTMLElement,
  start: HTMLElement
}

declare interface ActionFunction {
  (this: ActionContext, payload?: object): void
}