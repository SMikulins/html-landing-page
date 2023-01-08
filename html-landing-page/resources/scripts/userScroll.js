import throttle from 'lodash/throttle'

export function userScroll(element) {

    let body = document.querySelector('body')
    if (window.scrollY > 0) {
      body.classList.add('header-is-sticky')
    } else {
      body.classList.remove('header-is-sticky')
    }

    window.addEventListener('scroll', throttle(function () {
      if (this.scrollY > 0) {
        body.classList.add('header-is-sticky')
      } else {
        body.classList.remove('header-is-sticky')
      }
    }, 1000))
}
