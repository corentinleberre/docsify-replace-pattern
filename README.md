# Docsify-replace-pattern

Docsify-mermaid-zoom is a docsify plugin which allows to replace text pattern in the headings of docsify website.
Useful if you want to style sections of your documentation without adding html to your markdown.

## How to use

```html
<!-- Docsify-replace-pattern -->
<script src="//unpkg.com/docsify-replace-pattern/dist/index.js"></script>
```

Configurations : 
* Choose the type of headings you want to style (you can pass multiples headings)
* Define the patterns you want to replace. The surround property allow style to be  

```html
<script>
    window.$docsify = {
        ...,
        replacePatterns: {
        rootSelector: "h2",
        childSelector: "span",
        patterns: [
          { initial: "Bonjour", replace: "Salut", surround: false, style: "color: blue;" }
        ]
      }
    }
  </script>
```

## Demo

A demo is available [here](https://corentinleberre.github.io/docsify-replace-pattern/src/#/)