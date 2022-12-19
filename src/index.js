import { replacePatterns } from './replace-pattern.js';

const docsify = window.$docsify || {};

docsify.plugins = (docsify.plugins || []).concat(!!docsify.replacePatterns ? replacePatterns(...Object.values(docsify.replacePatterns)) : replacePatterns());