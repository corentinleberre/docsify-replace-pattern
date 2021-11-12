'use strict';

const replacePatterns = (patterns) => (hook) => hook.afterEach((html, next) => {
        patterns.forEach((tuple) => html = html.replaceAll(...tuple));
        next(html);
    });

const docsify = window.$docsify;

docsify?.plugins?.push(replacePatterns(docsify?.replacePatterns));
