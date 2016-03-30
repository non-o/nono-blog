"author":"Cedric Dumont",
"date":"30/03/2015"
;;;

# This is my First Test Post

some regular text

some text with **markdown** goodies *italic* **strong**
not going at line...

but here yes with a [simple link to google](www.google.com)

some images too

![insert images too](../images/nono-icon-white-500.png)

adding some htmpl like <b>bold</b> a <p> paragraph goes down</p>

```js

var React = require('react');
var Markdown = require('react-markdown');

React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);

```