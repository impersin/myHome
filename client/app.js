const app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.portfolio',
  'myApp.thegauntlet'
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
  .otherwise({redirectTo: '/'});
});