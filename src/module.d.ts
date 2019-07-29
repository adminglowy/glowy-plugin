declare interface ActionContext {
  html: HTMLElement,
  headerOffset: number,
  component: HTMLElement,
  frame: HTMLElement 
}

declare interface ActionFunction {
  (this: ActionContext, payload?: object): void
}