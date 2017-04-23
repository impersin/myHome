angular.module('myApp.resume', [])
  .controller('resumeController', function($scope, $window) {
    $scope.$on('$viewContentLoaded', function () {
      $window.scrollTo(0, 0);
    });
    $scope.temp = 'testing'; 
  });