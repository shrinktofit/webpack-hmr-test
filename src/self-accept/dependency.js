import { notifyExecution, notifyDispose } from '../util';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

// throw "223345";

console.log(`xx234567891012`);

export {};
