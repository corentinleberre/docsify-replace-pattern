const replaceOccurence = (occurences) => (hook) => hook.afterEach((html, next) => {
        occurences.forEach((tuple) => html = html.replaceAll(...tuple));
        next(html);
    });

export default replaceOccurence;