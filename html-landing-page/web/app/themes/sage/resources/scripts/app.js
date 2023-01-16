import domReady from '@roots/sage/client/dom-ready';

import { userScroll } from './components/userScroll.js'
import { counter } from './components/counter.js'
/**
 * Application entrypoint
 */
domReady(async () => {
  userScroll()
  counter()
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
