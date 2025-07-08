var app = angular.module("myApp", []);

app.controller("parentController", parentController);
app.controller("childController", childController);

function parentController($scope) {
  $scope.title = "Parent Controller";
}

function childController($scope) {
  // try to comment this line
  $scope.title = "Child Controller"; // If this was not given thaan it would have inherited the title property for parent

}
