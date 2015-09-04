angular.module('starter.services', [])

.factory('giphyService', function ($http) {
  var service = {};

  service.getGifs = function () {
    var url = "https://api.giphy.com/v1/gifs/search?q=pugs&api_key=dc6zaTOxFJmzC";
    return $http.get(url)
  }

  return service;
});
