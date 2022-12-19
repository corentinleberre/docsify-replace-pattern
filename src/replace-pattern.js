export const replacePatterns = (rootSelector = "h2", childSelector = "span", patterns = [{ initial: "Hello", replace: "Bonjour", surround: true, style: "color: blue;" }]) => (hook => hook.doneEach(() => {
    const nodes = document.querySelectorAll(rootSelector);

    nodes?.forEach(node => {
        const childSelectorNode = node.querySelector(childSelector);
        patterns?.forEach(pattern => {
            if(childSelectorNode.innerText.includes(pattern.initial)){
                if(pattern.surround){
                    const wrapNode = document.createElement(childSelector);
                    wrapNode.innerText = pattern.replace;
                    wrapNode.setAttribute("style", pattern.style);
                    childSelectorNode.innerText = childSelectorNode.innerText.replace(pattern.initial, "");
                    const linkNode = node.querySelector("a");
                    linkNode.insertBefore(wrapNode, linkNode.firstChild);
                } else {
                    childSelectorNode.innerText = childSelectorNode.innerText.replace(pattern.initial, pattern.replace);
                    childSelectorNode.setAttribute("style", pattern.style);
                }
            }
        })
    });
}));
    
    