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

app.controller('indexController', function($scope, factory, $interval) {
  $scope.index = 0;
  $scope.weather;
  factory.getWeather().then((res) =>{
    $scope.theTime = new Date().toLocaleTimeString();
    $scope.weatherData = res.data.query.results.channel;
    $scope.getWeather();      
  });
  $scope.getWeather = function() {
    if ($scope.index === $scope.weatherData.length) {
      $scope.index = 0;
    } 
    let location = $scope.weatherData[$scope.index].location;
    let condition = $scope.weatherData[$scope.index].item.condition; 
    $scope.weather = location.city + '  ' + condition.temp + ' °C  ' + condition.text;
    $scope.index++;
  };
  $interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);

  $interval(function () {
    $scope.getWeather();
  }, 4000);
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