angular.module('myApp.gallery', [])
.controller('galleryController', function($scope, factory, resolvedImages, $route) {
  $scope.test = '../style/images/core1.png';
  $scope.suffle = function(array) {
    var arrCopy = array.slice(0);
  	var temp = [];
  		while (temp.length !== arrCopy.length) {
  			var index = Math.floor(Math.random() * arrCopy.length);
  				if (temp.indexOf(arrCopy[index]) === -1) {
  					temp.push(arrCopy[index]);
  					}
  			}

  			return temp;
  };

  $scope.images = $scope.suffle(resolvedImages.data.Contents);

  $scope.reloadRoute = function() {
    $route.reload();
  };
  // //   console.log($scope.images);
  // // });
  // $scope.getImages = function() {
  //   factory.getAll().then(function(res) {
  //     $scope.images = res.data.Contents;
  //     console.log($scope.images);
  //   });
  // };
  // $scope.getImages();

});