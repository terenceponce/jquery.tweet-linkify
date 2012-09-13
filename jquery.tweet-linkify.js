/*
  jQuery Tweet Linkify (https://github.com/terenceponce/jquery.tweet-linkify)
  Written by Terence Ponce (http://terenceponce.github.com/)

  This is a small jQuery plugin that transforms @mention texts into hyperlinks 
  pointing to the actual Twitter profile, #hashtag texts into actual hashtag searches
  as well as hyperlink texts into actual hyperlinks.

  The hyperlink text transforming was based off of jLinker.js by Michalis Tzikas and Vasilis Lolos.

  The use-case of this plugin is very specific, so using this plugin means that you're probably
  calling the Twitter API through Javascript just like me.
*/
(function($){
  $.fn.tweetLinkify = function(options) {
    $(this).each(function() {
      var tweet = TweetLinkify($(this).text(), options)
      $(this).html(tweet);
    })
  }
  
  
  window.TweetLinkify = function(tweet, options) {
    var defaultAttributes = {
      excludeHyperlinks: false,
      excludeMentions: false,
      excludeHashtags: false,
      hyperlinkTarget: '',
      mentionTarget: '',
      mentionIntent: false,
      hashtagTarget: '',
      hyperlinkClass: '',
      mentionClass: '',
      hashtagClass: '',
      hyperlinkRel: '',
      mentionRel: '',
      hashtagRel: ''
    };

    var options = $.extend(defaultAttributes, options);

    var hyperlinkTarget = (options.hyperlinkTarget != '') ? 'target="_' + options.hyperlinkTarget + '"' : '';
    var mentionTarget = (options.mentionTarget != '') ? 'target="_' + options.mentionTarget + '"' : '';
    var hashtagTarget = (options.hashtagTarget != '') ? 'target="_' + options.hashtagTarget + '"' : '';
    var hyperlinkClass = (options.hyperlinkClass != '') ? 'class="' + options.hyperlinkClass + '"' : '';
    var mentionClass = (options.mentionClass != '') ? 'class="' + options.mentionClass + '"' : '';
    var hashtagClass = (options.hashtagClass != '') ? 'class="' + options.hashtagClass + '"' : '';
    var hyperlinkRel = (options.hyperlinkRel != '') ? 'rel="' + options.hyperlinkRel + '"' : '';
    var mentionRel = (options.mentionRel != '') ? 'rel="' + options.mentionRel + '"' : '';
    var hashtagRel = (options.hashtagRel != '') ? 'rel="' + options.hashtagRel + '"' : '';

    if (options.excludeHyperlinks != true) {
      tweet = tweet.replace(/(https\:\/\/|http:\/\/)([www\.]?)([^\s|<]+)/gi, '<a href="$1$2$3" ' + hyperlinkTarget + ' ' + hyperlinkClass + ' ' + hyperlinkRel + '>$1$2$3</a>');
      tweet = tweet.replace(/([^https\:\/\/]|[^http:\/\/]|^)(www)\.([^\s|<]+)/gi, '$1<a href="http://$2.$3" ' + hyperlinkTarget + ' ' + hyperlinkClass + ' ' + hyperlinkRel + '>$2.$3</a>');
      tweet = tweet.replace(/<([^a]|^\/a])([^<>]+)>/g, "&lt;$1$2&gt;").replace(/&lt;\/a&gt;/g, "</a>").replace(/<(.)>/g, "&lt;$1&gt;").replace(/\n/g, '<br />');
    }

    if (options.excludeMentions != true) {
      if (options.mentionIntent == false) {
        tweet = tweet.replace(/(@)(\w+)/g, '<a href="http://twitter.com/$2" ' + mentionTarget + ' ' + mentionClass + ' ' + mentionRel + '>$1$2</a>');
      } else {
        tweet = tweet.replace(/(@)(\w+)/g, '<a href="http://twitter.com/intent/user?screen_name=$2">$1$2</a>');
      }
    }

    if (options.excludeHashtags != true) {
      tweet = tweet.replace(/(#)(\w+)/g, '<a href="https://twitter.com/search/?src=hash&q=%23$2" ' + hashtagTarget + ' ' + hashtagClass + ' ' + hashtagRel + '>$1$2</a>');
    }
    
    return tweet;
  }
    
})(jQuery);