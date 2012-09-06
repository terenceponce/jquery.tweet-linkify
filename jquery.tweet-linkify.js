/*
  jQuery Tweet Linkify (https://github.com/terenceponce/jquery.tweet-linkify)
  Written by Terence Ponce (http://terenceponce.github.com/)

  This is a small jQuery plugin that transform @username texts into hyperlinks 
  pointing to the actual Twitter profile as well as hyperlink texts into actual hyperlinks.

  The hyperlink text transforming was based off of jLinker.js by Michalis Tzikas and Vasilis Lolos.

  The use-case of this plugin is very small and using this plugin means that you're most probably
  calling the Twitter API through Javascript just like me.

  It's not necessarily bad because hey, whatever works, right?
*/
(function($){
  $.fn.tweetLinkify = function(options) {

    var defaultAttributes = {
      excludeHyperlinks: false,
      excludeMentions: false,
      excluldeHashtags: false,
      target: '',
      className: '',
      rel: ''
    };

    var options = $.extend(defaultAttributes, options);

    targetString = (options.target != '') ? 'target="_' + options.target + '"' : '';
    classString = (options.className != '') ? 'class="' + options.className + '"' : '';
    relString = (options.rel != '') ? 'rel="' + options.rel + '"' : '';

    $(this).each(function() {
      tweet = $(this).text();

      if (options.excludeHyperlinks != true) {
        tweet = tweet.replace(/(https\:\/\/|http:\/\/)([www\.]?)([^\s|<]+)/gi, '<a href="$1$2$3" ' + targetString + ' ' + classString + ' ' + relString + '>$1$2$3</a>');
        tweet = tweet.replace(/([^https\:\/\/]|[^http:\/\/]|^)(www)\.([^\s|<]+)/gi, '$1<a href="http://$2.$3" ' + targetString + ' ' + classString + ' ' + relString + '>$2.$3</a>');
        tweet = tweet.replace(/<([^a]|^\/a])([^<>]+)>/g, "&lt;$1$2&gt;").replace(/&lt;\/a&gt;/g, "</a>").replace(/<(.)>/g, "&lt;$1&gt;").replace(/\n/g, '<br />');
      }

      if (options.excludeMentions != true) {
        tweet = tweet.replace(/(@)(\w+)/, '<a href="http://twitter.com/$2">$1$2</a>');
      }

      if (options.excluldeHashtags != true) {
        tweet = tweet.replace(/(#)(\w+)/, '<a href="https://twitter.com/search/?src=hash&q=%23$2">$1$2</a>');
      }

      $(this).html(tweet);
    })
  }
})(jQuery);