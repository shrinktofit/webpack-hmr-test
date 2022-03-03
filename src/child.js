import { notifyExecution, notifyDispose } from './util';

notifyExecution(import.meta.url);
import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

export function fn() {
    return 'ok' + Math.random() + '237546!789!!?!!!!!!!';
}
