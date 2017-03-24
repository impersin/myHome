angular.module('myApp.home', [])
  .controller('homeController', function($scope) {
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
  });