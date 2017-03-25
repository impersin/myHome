angular.module('myApp.thegauntlet', [])
  .controller('thegauntletController', function($scope) {
    $scope.portfolio =
    {
      title: 'Thegauntlet',
      url: 'https://the-gauntlet2.herokuapp.com',
      desc: 'Social media based web application that allows users to create custom competitions and vote on winner.',
      path: 'thegauntlet',
      images: ['cover.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png'],
      stack: 'stack.png',
      info: [
        ['React + Redux', 'Enhanced complexity of data flow'],
        ['AWS S3', 'Large amounts of data securely and allow instantaneous access for user with AWS'],
        ['MySQL', ''],
        ['Node + Express', '']
      ],
      linkTitle: 'Click to Visit Thegauntlet'
    };
  });