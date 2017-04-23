angular.module('myApp.wefitly', [])
  .controller('wefitlyController', function($scope, $window) {
    $scope.$on('$viewContentLoaded', function () {
      $window.scrollTo(0, 0);
    });  
    $scope.portfolio =
    {
      title: 'Wefit.ly',
      url: '',
      desc: ' Web application allowing users to find personal trainers based off of their location',
      path: 'wefitly',
      images: ['cover.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png'],
      stack: 'stack.png',
      systemDesign: 'https://s3-us-west-1.amazonaws.com/taegyudocs/system_wefitly.png',
      info: [
        ['React', ''],
        ['MongoDB', ''],
        ['Node + Express', '']
      ],
      linkTitle: ''
    };  
  });