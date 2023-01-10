# Docsify-replace-pattern

A small docsify plugin which allows to replace text pattern in your docsify website. Useful if you want to style sections of your documentation without adding html/css to your markdown.

👉 You can test the plugin [here](https://corentinleberre.github.io/docsify-replace-pattern/)

## How to use

```html
  <!-- Import docsify-replace-pattern-->
  <script src="//unpkg.com/docsify-replace-pattern/dist/docsify-replace-pattern.js"></script>
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

## License

The code in this repository is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

If you found a bug in my code or want to improve this plugin, please feel free to open a pull request or an issue. I am always looking for ways to improve my solutions and I appreciate any feedback or contributions.
