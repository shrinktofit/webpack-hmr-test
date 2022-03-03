import { notifyExecution, notifyDispose, notifyInvokeUpdateHandler, notifyInvokeAcceptErrorHandler } from '../util';
import './dependency';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

import.meta.webpackHot.accept('./dependency', () => {
    notifyInvokeUpdateHandler(import.meta.url, './dependency');
}, () => {
    notifyInvokeAcceptErrorHandler(import.meta.url, './dependency');
});