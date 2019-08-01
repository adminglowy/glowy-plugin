export function easeInOutQuad (current: number, start: number, change: number, duration: number) {
  current /= duration / 2

  if (current < 1) {
    return change / 2 * current * current + start
  }

  current--

  return -change / 2 * (current * (current - 2) - 1) + start
}

export default easeInOutQuad
