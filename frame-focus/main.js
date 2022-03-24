const bodyEl = document.querySelector('body')
const frameEl = document.querySelector('.layer#frame')

// initialize
window.onload = () => {
  frameEl.style.width = frameEl.style.height = getballDiameter() + "px"
}

window.addEventListener('resize', function() {
  frameEl.style.width = frameEl.style.height = getballDiameter() + "px"
  console.log(frameEl.clientWidth)
})

function getballDiameter() {
  return (bodyEl.clientWidth + bodyEl.clientHeight) * 0.1
}

// const frameEl = document.querySelector('.layer#frame')

// frameEl.addEventListener('click', function() {
//   const prevX = frameEl.clientWidth
//   console.log(prevX)
//   frameEl.style.left = Math.floor(Math.random() * 400) + "px"
//   frameEl.style.top = Math.floor(Math.random() * 400) + "px"
// })