declare var WHITELABEL_ENDPOINT: string

declare interface GlowyFrame {
  id: string
  frame: HTMLIFrameElement
}

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