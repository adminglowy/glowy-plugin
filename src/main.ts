import actions from './actions/index'
const w = window as any

const installGlowyFrame = w.installGlowyFrame = w.installGlowyFrame || function () {
  const component = document.querySelector<HTMLElement>('.vtex-product-context-provider .flex')

  if (!component) {
    return
  }

  const frameUrl = prompt('Qual a url do iframe?', 'http://localhost:8080')

  window.addEventListener('message', ({ data }) => {
    if (!data || data.sender !== 'Glowy') {
      return
    }

    const frame = document.querySelector<HTMLElement>('iframe[name="glowy"]')
    const header = document.querySelector<HTMLElement>('header.header')
    const headerOffset = header.clientHeight
    const html = window.document.documentElement

    const context: ActionContext = { component, frame, headerOffset, html }

    if (!actions.hasOwnProperty(data.action)) {
      return
    }

    actions[data.action].call(context, data.payload)
  })

  component.innerHTML = `<iframe name="glowy" src="${frameUrl}" allow="geolocation" style="border: 0; flex: 1 1 auto; width: 100%;">`
}

installGlowyFrame()
export default installGlowyFrame
