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