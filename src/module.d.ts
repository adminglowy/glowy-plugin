declare var WHITELABEL_ENDPOINT: string

interface GlowyMessage {
  frame: string
  sender: 'Glowy'
  version: string
  action: string
  payload: any
}
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
