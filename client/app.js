const app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.portfolio',
  'myApp.thegauntlet',
  'myApp.wefitly',
  'myApp.myKicks',
  'myApp.blog',
  'myApp.gallery',
  'myApp.factory',
  'jtt_angular_xgallerify'
]);

app.controller('indexController', function($scope, factory) {
  $scope.index = 0;
  $scope.getWeather = function() {
    factory.getWeather().then((res) =>{
      if ($scope.index === res.data.query.results.channel.length) {
        $scope.index = 0;
      } 
      let location = res.data.query.results.channel[$scope.index].location;
      let condition = res.data.query.results.channel[$scope.index].item.condition; 
      $scope.weather = location.city + '  ' + condition.temp + ' °C  ' + condition.text;
      $scope.index++;
    });
  };
  $scope.getWeather();   
  setInterval(function() {
    $scope.getWeather();   
  }, 5000);
});

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  })
  .when('/thegauntlet', {
    templateUrl: 'views/portfolio.html',
    controller: 'thegauntletController'
  })
  .when('/wefitly', {
    templateUrl: 'views/portfolio.html',
    controller: 'wefitlyController'
  })
  .when('/mykicks', {
    templateUrl: 'views/portfolio.html',
    controller: 'myKicksController'
  })
  .when('/blog', {
    templateUrl: 'views/blog.html',
    controller: 'blogController'
  })
  .when('/gallery', {
    templateUrl: 'views/gallery.html',
    controller: 'galleryController',
    resolve: {
      resolvedImages: function(factory) {
        return factory.getAll();
      }
    }
  })
  .when('/resume', {
    templateUrl: 'views/resume.html',
    controller: ''
  })
  .otherwise({redirectTo: '/'});
});