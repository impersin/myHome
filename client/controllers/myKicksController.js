angular.module('myApp.myKicks', [])
  .controller('myKicksController', function($scope) {
    $scope.portfolio =
    {
      title: 'MyKicks',
      url: '',
      desc: ' A personal website displaying my shoe collection as well as corresponding reviews',
      stack: 'tglStack.png',
      path: 'mykicks',
      images: ['cover.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png'],
      stack: 'stack.png',
      info: [
        ['Angular', ],
        ['MySQL', ''],
        ['Node + Express', '']
      ]
    };  
  });