import { notifyExecution, notifyDispose, notifyInvokeUpdateHandler } from './util';
import './child';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

import.meta.webpackHot.accept(() => {
    notifyInvokeUpdateHandler(import.meta.url);
});