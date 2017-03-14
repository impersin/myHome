angular.module('myApp.portfolio', [])
  .controller('portfolioController', function($scope) {
    $scope.portfolios = [
      {
        title: 'Thegauntlet',
        coverImage: 'Thegauntlet.png',
        url: 'https://the-gauntlet2.herokuapp.com',
        desc: 'Social media based web application that allows users to create custom competitions and vote on winner.',
        stack: 'tglStack.png'
        // ['aws.png', 'react.png', 'redux.png', 'sql.png', 'node.png', 'express.png', 'webpack.png'] 
      },
      {
        title: 'Wefit.ly',
        coverImage: 'Wefit.ly.png',
        desc: 'Web application allowing users to find personal trainers based off of their location',
        stack: 'tglStack.png'

      },
      {
        title: 'Mykicks',
        coverImage: 'Mykicks.png',
        desc: 'A personal website displaying my shoe collection as well as corresponding reviews.',
        stack: 'tglStack.png'
      },
    ];
  });