angular.module('myAppName')

.factory('myService', function ($http) {
  var service = {};

  service.getData = function () {
    return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC');
  }

  return service;
})
