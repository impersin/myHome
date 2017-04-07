angular.module('myApp.factory', [])
.factory('factory', function ($http) {
  return {
    getJson: function() {
      return $http.get('images.json')
      .then(function(res) {
        return res;
      });
    },
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/images'
      })
      .then(function(res) {
        return res;
      });
    }
  };
}); 