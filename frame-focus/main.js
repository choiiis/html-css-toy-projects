const bodyEl = document.querySelector('body')
const focusEl = document.querySelector('#focus')

// first load
window.onload = () => {
  resetFocus()
}

// screen resized
window.addEventListener('resize', function() {
  resetFocus()
})

function resetFocus() {
  // set diameter
  focusEl.style.width = focusEl.style.height = getFocusDiameter() + "px"
  // place on the center
  focusEl.style.left = (bodyEl.clientWidth - focusEl.clientWidth) * 0.5 + "px"
  focusEl.style.top = (bodyEl.clientHeight - focusEl.clientWidth) * 0.5 + "px"
}

function getFocusDiameter() {
  return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.1)
}

// If click the 'focus' element
focusEl.addEventListener('click', function() {
  const prevX = focusEl.clientWidth
  this.style.left = getRandomPos(prevX)['w'] + "px"
  this.style.top = getRandomPos(prevX)['h'] + "px"
})

// Get Random (x, y) in the browser area
function getRandomPos(d) {
  return {
    'w': Math.floor(Math.random() * (bodyEl.clientWidth - d)),
    'h': Math.floor(Math.random() * (bodyEl.clientHeight - d))
  }
}