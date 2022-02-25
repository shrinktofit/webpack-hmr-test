import { fn } from './grandparent';
import { notifyExecution, notifyDispose } from './util';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

const root = document.getElementById('root');

function render () {
  root.innerHTML = fn('!!!!!!!');
}

render();