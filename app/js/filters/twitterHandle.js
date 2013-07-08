angular.module('myApp.filters').filter('twitterHandle', [
    function() {
        return function(text) {
          return ['@', text].join('');
        };
    }
]);