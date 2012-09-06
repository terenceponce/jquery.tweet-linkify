/*
  Written by Terence Ponce http://terenceponce.github.com/

  This is a small jQuery plugin that converts @username texts into hyperlinks pointing to the actual Twitter profile.
*/
(function($){
  $.fn.atUsername = function() {
    $(this).each(function() {
      tweet = $(this).text();

      tweet = tweet.replace(/(@)(\w+)/, '<a href="http://twitter.com/$2">$1$2</a>');
      $(this).html(t);
    })
  }
});