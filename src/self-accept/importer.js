import { notifyExecution, notifyDispose, notifyInvokeSelfAcceptErrorHandler } from '../util';
import './dependency';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

console.log(`xx23456`);

import.meta.webpackHot.accept((err) => {
    notifyInvokeSelfAcceptErrorHandler(import.meta.url, err);
});