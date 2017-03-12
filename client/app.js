const app = angular.module('myApp', [
  'ngRoute',
  'myApp.home'
]);

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  })
  .when('/portfolio', {
    templateUrl: 'views/portfolio.html'
  })
  .otherwise({redirectTo: '/'});
});