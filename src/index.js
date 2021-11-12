import replacePatterns from "./replace-pattern";

const docsify = window.$docsify;

docsify?.plugins?.push(replacePatterns(docsify?.replacePatterns));