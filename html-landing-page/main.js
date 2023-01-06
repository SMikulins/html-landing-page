import './resources/styles/app.css'
import javascriptLogo from './javascript.svg'
import wonderfulLogo from './resources/svgs/wonderful-logo.svg'
import { setupCounter } from './counter.js'
import { header } from './resources/scripts/header.js'


document.querySelector( '#app' ).innerHTML = `
  
  <div>
    ${header}
    <a href="https://vitejs.dev" target="_blank">
      <img src="${wonderfulLogo}" class="logo" alt="" />
    </a>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="font-roboto-slab text-green-400 text-5xl font-thin">Hello Vite!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
    <div>${javascriptLogo}</div>
    
    
  </div>
`

setupCounter( document.querySelector( '#counter' ) )
