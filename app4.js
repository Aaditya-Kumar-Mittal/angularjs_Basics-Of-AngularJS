var myapp = angular
  .module("myApplication", [])
  .controller("userController", userController);

function userController($scope) {
  $scope.firstName = "Aaditya";
  $scope.lastName = "Mittal";
  $scope.fullName = $scope.firstName + " " + $scope.lastName;
  $scope.updateToGovernmentName = function () {
    $scope.fullName = "Aaditya Kumar Mittal";
  };
}
