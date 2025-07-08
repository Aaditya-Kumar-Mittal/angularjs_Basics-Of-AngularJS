var myapp = angular
  .module("myApplication", [])
  .controller("userController", userController);

function userController($scope) {
  $scope.name = "Aaditya";
}
