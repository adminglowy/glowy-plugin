import doFrameAction from './actions/frame-actions'

const w = window as any

const installGlowyFrame = function () {
  if (w.glowy.installed) {
    return
  }

  const html = window.document.documentElement

  const container = document.querySelector<HTMLDivElement>('.vtex-product-context-provider .flex')!
  const start = container.querySelector<HTMLDivElement>('.pricing-tables')

  if (!container || !start) {
    return
  }

  const frameUrl = prompt('Qual a url do iframe?', 'http://localhost:8080')

  if (!frameUrl) {
    return
  }

  container
    .querySelectorAll('.block-mb60')
    .forEach(m => m.parentNode!.removeChild(m))

  const padding = document.querySelector<HTMLDivElement>('body.countdown_on .header-padding-container')

  if (padding) {
    padding.style.marginTop = '50px'
  }

  window.addEventListener('message', ({ data }) => {
    if (!data || data.sender !== 'Glowy') {
      return
    }

    const frame = document.querySelector<HTMLIFrameElement>('iframe[name="glowy"]')!
    const header = container.querySelector<HTMLElement>('header.header')!
    const headerOffset = header.clientHeight

    doFrameAction({
      frame,
      scrollContainer: html,
      scrollOffset: headerOffset
    }, data.action, data.payload)
  })

  const frame = document.createElement('iframe')

  frame.classList.add('block-mb60')
  frame.name = 'glowy'
  frame.src = frameUrl
  frame.allow = 'geolocation'

  Object.assign(frame.style, {
    border: '0',
    flex: '1 1 auto',
    width: '100%'
  })

  start.after(frame)

  w.glowy.installed = true
}

const glowy = w.glowy = w.glowy || {
  install: installGlowyFrame,
  installed: false
}

glowy.install()

export default glowy
