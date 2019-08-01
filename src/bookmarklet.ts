import qs from 'qs'

function installGlowyScript () {
  if (window.glowy) {
    return
  }

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/gh/glowy-dev/whitelabel-frame@latest/glowy.min.js'
  script.async = true
  script.defer = true

  const last = Array.from(document.getElementsByTagName('script')).reverse()[0]

  if (last) {
    last.after(script)
  } else {
    document.head.appendChild(script)
  }
}

function addGlowyFrame () {
  const query = prompt('Insira as options do frame:') || ''
  const options = qs.parse(query)

  alert('Escolha um local para colocar o frame')

  let target: HTMLElement
  const bodyCursor = document.body.style.cursor
  const dummy = document.createElement('u')

  Object.assign(dummy.style, {
    backgroundColor: 'rgba(200,200,200,.7)',
    display: 'block',
    position: 'fixed',
    transition: 'all .1s ease-in-out',
    borderRadius: '2px',
    height: '4px',
    top: '-4px',
    left: '0',
    opacity: '0'
  })

  document.body.appendChild(dummy)
  document.body.style.cursor = 'pointer'

  const moveDummy = (event: Event) => {
    if (event.target) {
      target = event.target as HTMLElement
    }

    if (!target || !target.getBoundingClientRect) {
      return
    }

    const rect = target.getBoundingClientRect()
    const top = `${Math.min(window.innerHeight - 2, Math.round(rect.top + rect.height + 2))}px`
    const left = `${Math.round(rect.left)}px`
    const width = `${Math.round(rect.width)}px`

    Object.assign(dummy.style, {
      top,
      left,
      width,
      opacity: '1'
    })
  }

  const keydown = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      destroy()
      return false
    }
  }

  const destroy = () => {
    window.removeEventListener('click', onClick)
    window.removeEventListener('scroll', moveDummy)
    window.removeEventListener('keydown', keydown)
    window.removeEventListener('mouseover', moveDummy)

    document.body.style.cursor = bodyCursor
    document.body.removeChild(dummy)
  }

  const onClick = (event: MouseEvent) => {
    const el = event.target as HTMLElement
    const frame = document.createElement('div')

    frame.classList.add('glowy-frame')
    Object.assign(frame.dataset, options)

    el.after(frame)

    destroy()

    return false
  }

  window.addEventListener('click', onClick)
  window.addEventListener('scroll', moveDummy, true)
  window.addEventListener('keydown', keydown, true)
  window.addEventListener('mouseover', moveDummy)
}

installGlowyScript()
addGlowyFrame()
