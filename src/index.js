import { fn } from './grandparent';
import { notifyExecution, notifyDispose } from './util';
// import './delete-accepted-module/importer';
import './self-accept/importer';
import './accept-dependency/importer';
import './delete-accepted-module/importer';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

const root = document.getElementById('root');

function render () {
  root.innerHTML = fn('!!!!!!!66107201');
}

render();