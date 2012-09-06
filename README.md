# jQuery Tweet Linkify

This is a small jQuery plugin that transforms @mention texts into hyperlinks pointing to the actual Twitter profile, #hashtag texts into a real hashtag search, as well as hyperlink texts into actual hyperlinks.

The hyperlink text transforming was based off of jLinker.js by Michalis Tzikas and Vasilis Lolos.

## How to use

### Basic Usage

Let's say you have this message:

`This is a test tweet to @terenceponce http://t.co/something`

```html
<p class="message">This is a test tweet to @terenceponce http://t.co/something</p>
```

Doing `$('p.message').tweetLinkify();` will transform the text into this:

> This is a test tweet to [@terenceponce](http://twitter.com/terenceponce) [http://t.co/something](http://t.co/something)

```html
<p class="message">This is a test tweet to <a href="http://twitter.com/terenceponce">@terenceponce</a> <a href="http://t.co/something">http://t.co/something</a></p>
```

### Advanced Usage

The plugin accepts multiple options:

* `excludeHyperlinks` - Excludes hyperlink texts from being transformed. Defaults to `false`
* `excludeMentions` - Excludes @mention texts from being transformed. Defaults to `false`
* `excludeHashtags` - Excludes #hashtag texts from being transformed. Defaults to `false`
* `target` - The `target` attribute of `<a></a>`. Options are `blank`, `self`, `parent`, and `top`
* `className` - The `class` attribute of `<a></a>`.
* `rel` - The `rel` attribute of `<a></a>`.

Let's say I want the hyperlinks to have a class name and open to a new tab instead of the same window. Using the previous example:

```javascript
var options = {
  target: 'blank',
  className: 'best-class'
};

$('p.message').tweetLinkify(options);
```

Will transform into this:

```html
<p class="message">This is a test tweet to @terenceponce <a href="http://t.co/something" target="_blank" class="best-class">http://t.co/something</a></p>
```