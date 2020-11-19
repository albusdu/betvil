const activeLine = () => {
  //for animation SPA route change (trigger on route change)
  let line = document.querySelector('.active-line')
  if (window.screen.width >= 768) {
    let activeItemY = document.querySelector('.nav__item--active').offsetTop
    line.style.top = `${activeItemY - 6}px`
    line.style.left = 'initial'
  } else {
    let activeItemX = document.querySelector('.nav__item--active').offsetLeft
    line.style.left = `${activeItemX - 6}px`
    line.style.top = 'initial'
  }
  //for animation SPA route change (trigger on route change)
}
activeLine()
window.addEventListener('resize', activeLine)
