import doFrameAction from './actions/frame-actions'
import getScrollableParent from './utils/get-scrollable-parent'
import registerFrames from './actions/register'

(function glowyInstall () {
  if (window.glowy) {
    if (console && console.error) {
      console.error(`Glowy ${window.glowy.version} is already installed`)
    }
    return
  }

  window.addEventListener('message', (event) => {
    if (!event.data || event.data.sender !== 'Glowy') {
      return
    }

    const data = event.data as GlowyMessage

    if (data.version !== '1') {
      console.error(`This library does not support Glowy Message v${data.version}. Supported: v1`)
      return
    }

    const glowy = window.glowy!

    const glowyFrame = glowy.frames.find(m => m.id === data.frame)

    if (!glowyFrame) {
      return
    }

    const frame = glowyFrame.frame
    const scrollContainer = getScrollableParent(frame)

    doFrameAction({
      frame,
      scrollContainer,
      scrollOffset: 0
    }, data.action, data.payload)
  })

  const glowy: GlowyModule = {
    version: 'v1.0',
    frames: registerFrames()
  }

  const observer = new MutationObserver(() => {
    glowy.frames = [...glowy.frames, ...registerFrames()]
  })

  observer.observe(document.body, { childList: true, subtree: true })

  window.glowy = glowy
})()
