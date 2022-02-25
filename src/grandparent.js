import { notifyDispose, notifyExecution } from './util';

export * from './parent';

import './parent-accept-self';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));