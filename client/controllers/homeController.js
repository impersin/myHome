angular.module('myApp.home', [])
  .controller('homeController', function($scope, $location, $anchorScroll) {
    $scope.aboutMe = false;
    $scope.contact = false;
    $scope.aboutMeToggle = function() {
      $scope.aboutMe = !$scope.aboutMe;
      if ($scope.aboutMe) {
        setTimeout($scope.gotoBottom, 0);
      }
    };
    $scope.contactToggle = function() {
      $scope.contact = !$scope.contact;
      if ($scope.contact) {
        setTimeout($scope.gotoBottom, 0);
      }
      
    };
    $scope.profile = {
      firstName: 'Terry',
      lastName: 'Leem',
      title: 'Full stack Javacript Developer',
      email: 'taegyuleem@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/impersin',
      github: 'https://github.com/impersin/',
      phone: '(925) 577-1355',
      about: [
        'I am Korean',
        'Korean name is Taegyu Leem',
        'Took 10 years to become a Software engineer',
        'Like Angular and React equally',
        'A good basketball player',
        'Failed my driving test 5 times',
        'Looking for a job',    
      ]
    };
    $scope.gotoBottom = function () {
    // set the location.hash to the id of
    // the element you wish to scroll to.
      $location.hash('bottom');

    // call $anchorScroll()
      $anchorScroll();
      $location.hash('');
    };  
  });