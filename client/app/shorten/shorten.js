angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  //so we want to enable navigation between links view and shorten view. 
  $scope.link = {};
  $scope.addLink = function (){
    Links.addlink($scope.link)
      // .then(function(){
      //   $location.path('/links');
      // })
  };
});
