declare var WHITELABEL_ENDPOINT: string

declare interface GlowyFrame {
  id: string
  frame: HTMLIFrameElement
}

declare interface GlowyModule {
  version: string
  frames: GlowyFrame[]
}

declare interface Window {
  glowy?: GlowyModule
}
