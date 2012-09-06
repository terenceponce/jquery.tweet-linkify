# jQuery Tweet Linkify

This is a small jQuery plugin that transforms @username texts into hyperlinks pointing to the actual Twitter profile as well as hyperlink texts into actual hyperlinks.

The hyperlink text transforming was based off of jLinker.js by Michalis Tzikas and Vasilis Lolos.

## How to use

Let's say you have this message:

> This is a test tweet to @terenceponce \http://t.co/something

```html
<p class="message">This is a test tweet to @terenceponce http://t.co/something</p>
```

Doing `$('p.message').tweetLinkify();` will transform the text into this:

> This is a test tweet to [@terenceponce](http://twitter.com/terenceponce) [http://t.co/something](http://t.co/something)

```html
<p class="message">This is a test tweet to <a href="http://twitter.com/terenceponce">@terenceponce</a> <a href="http://t.co/something">http://t.co/something</a></p>
```