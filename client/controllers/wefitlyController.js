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
      images: ['	https://s3-us-west-1.amazonaws.com/taegyudocs/wefit.ly/cover.png', 'https://s3-us-west-1.amazonaws.com/taegyudocs/wefit.ly/img1.png', 'https://s3-us-west-1.amazonaws.com/taegyudocs/wefit.ly/img2.png', 'https://s3-us-west-1.amazonaws.com/taegyudocs/wefit.ly/img3.png', 'img4.png'],
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