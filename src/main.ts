import doFrameAction from './actions/frame-actions'
import getScrollableParent from './utils/get-scrollable-parent'
import registerFrames from './actions/register'

export default (function glowyInstall () {
  const glowy: GlowyModule = {
    version: `v${VERSION}`,
    frames: []
  }

  window.addEventListener('message', (event) => {
    if (!event.data || event.data.sender !== 'Glowy') {
      return
    }

    const data = event.data as GlowyMessage

    if (data.version !== '1') {
      console.error(`This library version does not support Glowy Message v${data.version}. Supported: v1`)
      return
    }

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

  glowy.frames = registerFrames()

  const observer = new MutationObserver(() => {
    glowy.frames = [...glowy.frames, ...registerFrames()]
  })

  observer.observe(document.body || document.documentElement, { childList: true, subtree: true })

  return glowy
})()
