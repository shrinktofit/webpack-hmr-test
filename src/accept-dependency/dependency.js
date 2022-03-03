import { notifyExecution, notifyDispose } from '../util';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

// throw "2233";

console.log(`xx2435`);

export {};
