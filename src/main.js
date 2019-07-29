(function () {
  const frameUrl = prompt('Qual a url do iframe?', 'http://localhost:8080')
  const component = document.querySelector('.vtex-product-context-provider .flex')
  const increment = 16

  const easeInOutQuad = function (current, start, change, duration) {
    current /= duration / 2

    if (current < 1) {
      return change / 2 * current * current + start
    }

    current--

    return -change / 2 * (current * (current - 2) - 1) + start
  }

  const scrollTo = function (element, to, duration, direction = 'scrollTop') {
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

  window.addEventListener('message', ({ data }) => {
    if (!data || data.sender !== 'Glowy') {
      return
    }

    const html = window.document.documentElement
    const header = document.querySelector('header.header')

    const headerOffset = header.clientHeight

    switch (data.action) {
      case 'resize':
        (() => {
          const { height } = data.payload
          document.querySelector('iframe[name="glowy"]').style.height = `${height}px`
        })()
        break
      case 'route_change':
        scrollTo(html, (component.offsetTop || component.clientTop) - headerOffset, 0)
        break
      case 'scroll_to':
        (() => {
          const { top, duration } = data.payload
          scrollTo(html, (component.offsetTop || component.clientTop) + top - headerOffset, duration)
        })()
        break
      case 'scroll_to_view':
        (() => {
          const { top, bottom, duration } = data.payload
          const [elTop, elBottom] = [component.offsetTop + top, component.offsetTop + bottom]
          const [viewTop, viewBottom] = [html.scrollTop + headerOffset, html.scrollTop + window.innerHeight]

          let diff = 0

          if (elTop < viewTop) {
            diff = elTop - viewTop - 20
          } else if (elBottom > viewBottom) {
            diff = elBottom - viewBottom + 20
          }

          if (diff === 0) {
            return
          }

          scrollTo(html, html.scrollTop + diff, duration)
        })()
        break
    }
  })

  component.innerHTML = `<iframe name="glowy" src="${frameUrl}" allow="geolocation" style="border: 0; flex: 1 1 auto; width: 100%;">`
})()
