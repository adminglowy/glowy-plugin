import registerFrames from './actions/register'

(function glowyInstall () {
  if (window.glowy) {
    if (console && console.error) {
      console.error(`Glowy ${window.glowy.version} is already installed`)
    }
    return
  }

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
