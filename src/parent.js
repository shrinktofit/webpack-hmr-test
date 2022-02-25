import { notifyExecution, notifyDispose } from './util';

export * from './child';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

import.meta.webpackHot.accept('./child', () => {
    require('./util').notifyInvokeUpdateHandler(import.meta.url, './child');
});