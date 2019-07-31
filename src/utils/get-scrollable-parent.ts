// Thanks to https://github.com/twxia

export function getScrollableParent (element: HTMLElement | null): HTMLElement {
  if (!element || !element.parentElement) {
    return window.document.documentElement
  }

  const parent = element.parentElement

  const overflowY = window.getComputedStyle(parent).overflowY!
  const isScrollable = !['visible', 'hidden'].includes(overflowY)

  if (isScrollable && parent.clientHeight > 0 && parent.scrollHeight >= parent.clientHeight) {
    return parent
  }

  return getScrollableParent(parent.parentElement)
}

export default getScrollableParent
