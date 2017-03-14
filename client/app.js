const app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.portfolio',
  'myApp.thegauntlet',
  'myApp.wefitly',
  'myApp.myKicks',
  'myApp.blog'
]);

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
  .otherwise({redirectTo: '/'});
});