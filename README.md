# Docsify-replace-pattern

Docsify-replace-pattern is a small docsify plugin which allows to replace text pattern in your docsify website. Useful if you want to style sections of your documentation without adding html to your markdown.

## How to use

```html
<!-- Docsify-replace-pattern -->
<script src="//unpkg.com/docsify-replace-pattern/dist/index.js"></script>
```

Configurations :

* Define the patterns you want to replace. Example below 👇

```html
<script>
    window.$docsify = {
        ...,
        name: 'Docsify-replace-pattern',
        replacePatterns: [
          ['GET', '<span class="green">GET</span>'],
          ['POST', '<span class="red">POST</span>']
        ],
        ...,
    }
  </script>
```
