import replaceOccurences from "./replace-pattern";

const docsify = window.$docsify;

docsify?.plugins?.push(replaceOccurences(docsify?.replaceOccurences));