import pick from 'lodash.pick'
import qs from 'qs'
import uuid from 'uuidv4'

const ENDPOINT = Object.freeze(new URL(WHITELABEL_ENDPOINT))

export function registerFrames () {
  const candidates = Array.from(document.querySelectorAll<HTMLDivElement>('div.glowy-frame:not(.adding)'))

  return candidates
    .map(m => {
      m.classList.add('adding')
      return m
    })
    .reduce((acc, candidate) => {
      const id = uuid()

      const options = {
        frameId: id,
        ...pick(
          candidate.dataset,
          [
            'media',
            'provider',
            'page',
            'token',
            'screen',
            'backButtonLabel',
            'backButtonUrl',
            'scrollOffset'
          ]
        )
      }
      const { scrollOffset } = candidate.dataset

      const frame = document.createElement('iframe')

      frame.classList.add('glowy-frame')
      frame.src = `${ENDPOINT.origin}/?${qs.stringify(options)}`
      frame.name = `glowy-${id}`
      frame.allow = 'geolocation'
      frame.dataset.id = id
      frame.dataset.scrollOffset = scrollOffset || '0'

      Object.assign(frame.style, {
        border: '0',
        width: '100%'
      })

      candidate.after ? candidate.after(frame) : candidate.parentElement!.insertBefore(frame, candidate.nextSibling)
      candidate.parentElement!.removeChild(candidate)

      return [...acc, { id, frame }]
    }, [] as GlowyFrame[])
}

export default registerFrames
