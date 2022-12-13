const replacePatterns = (patterns) => (hook) => hook.afterEach((html, next) => {
    patterns.forEach((tuple) => html = html.replaceAll(...tuple));
    next(html);
});

export default replacePatterns;