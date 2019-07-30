import { easeInOutQuad } from './ease-in-out'

const increment = Math.floor(1000 / 60) // +-60fps

export function scrollTo (element: HTMLElement, to: number, duration: number, direction: 'scrollTop' | 'scrollLeft' = 'scrollTop') {
  let start = element[direction]
  let change = to - start
  let currentTime = 0

  duration = Math.max(increment, duration)

  const animateScroll = function () {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)

    element[direction] = val

    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}
