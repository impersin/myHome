angular.module('myApp.wefitly', [])
  .controller('wefitlyController', function($scope) {
    $scope.portfolio =
    {
      title: 'Wefit.ly',
      url: '',
      desc: ' Web application allowing users to find personal trainers based off of their location',
      path: 'wefitly',
      images: ['cover.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png'],
      stack: 'stack.png'
        // ['aws.png', 'react.png', 'redux.png', 'sql.png', 'node.png', 'express.png', 'webpack.png'] 
    };  
  });