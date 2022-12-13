import replacePatterns from "./docsify-replace-pattern";

const docsify = window.$docsify || {};

// Remove if you don't use props
const props = docsify.replacePatterns || {};

docsify.plugins = [].concat(docsify.plugins || [], replacePatterns(props));
