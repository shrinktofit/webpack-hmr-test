import { notifyExecution, notifyDispose, notifyInvokeSelfAcceptErrorHandler } from '../util';


notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

import.meta.webpackHot.accept((err) => {
    notifyInvokeSelfAcceptErrorHandler(import.meta.url, err);
});