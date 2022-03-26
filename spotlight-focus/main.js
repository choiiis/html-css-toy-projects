const bodyEl = document.querySelector('body')
const focusEl = document.querySelector('#focus')
const introEl = document.querySelector('#intro')

// first load
window.onload = () => {
  resetFocus()
}

// screen resized
window.addEventListener('resize', function() {
  resetFocus()
})

document.addEventListener("mousemove", trackMouse = (event) => {
  const focusElX = event.clientX + "px"
  const focusElY = event.clientY + "px"
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.1}px at ${focusElX} ${focusElY},
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%`
})

function resetFocus() {
  // reset place if reloaded
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.1}px at ${bodyEl.clientWidth * 0.6 + "px"} ${bodyEl.clientHeight * 0.3 + "px"},
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%`
}

function getScreenAvg() {
  return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.5)
}