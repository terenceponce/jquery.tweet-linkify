# jQuery Tweet Linkify

This is a small jQuery plugin that transforms @mention texts into hyperlinks pointing to the actual Twitter profile, #hashtag texts into real hashtag searches, as well as hyperlink texts into actual hyperlinks.

The hyperlink text transforming was based off of jLinker.js by Michalis Tzikas and Vasilis Lolos.

## How to use

### Basic Usage

Let's say you have this tweet:

`This is a test tweet to @terenceponce http://t.co/something #YOLO`

```html
<p class="tweet">This is a test tweet to @terenceponce http://t.co/something</p> #YOLO
```

Doing `$('p.tweet').tweetLinkify();` will transform the text into this:

> This is a test tweet to [@terenceponce](http://twitter.com/terenceponce) [http://t.co/something](http://t.co/something) [#YOLO](https://twitter.com/search/?src=hash&q=%23YOLO)

```html
<p class="tweet">This is a test tweet to <a href="http://twitter.com/terenceponce">@terenceponce</a> <a href="http://t.co/something">http://t.co/something</a> <a href="https://twitter.com/search/?src=hash&q=%23YOLO">#YOLO</a></p>
```

### Advanced Usage

The plugin accepts multiple options:

* `excludeHyperlinks` - Excludes hyperlink texts from being transformed. Defaults to `false`
* `excludeMentions` - Excludes @mention texts from being transformed. Defaults to `false`
* `excludeHashtags` - Excludes #hashtag texts from being transformed. Defaults to `false`
* `hyperlinkTarget` - The `target` attribute for hyperlinks. Options are `blank`, `self`, `parent`, and `top`
* `mentionTarget` - The `target` attribute for mentions. Options are `blank`, `self`, `parent`, and `top`
* `hashtagTarget` - The `target` attribute for hashtags. Options are `blank`, `self`, `parent`, and `top`
* `hyperlinkClass` - The `class` attribute for hyperlinks.
* `mentionClass` - The `class` attribute for mentions.
* `hashtagClass` - The `class` attribute for hashtags.
* `hyperlinkRel` - The `rel` attribute for hyperlinks.
* `mentionRel` - The `rel` attribute for mentions.
* `hashtagRel` - The `rel` attribute for hashtags.

Let's say I want the hyperlinks to have a class name and open to a new tab instead of the same window. Using the previous example:

```javascript
var options = {
  target: 'blank',
  hyperlinkClass: 'yolo-swag'
};

$('p.tweet').tweetLinkify(options);
```

Will transform into this:

```html
<p class="tweet">This is a test tweet to @terenceponce <a href="http://t.co/something" target="_blank" class="yolo-swag">http://t.co/something</a> <a href="https://twitter.com/search/?src=hash&q=%23YOLO">#YOLO</a></p>
```