var app = angular.module("myApp", []);

app.controller("mainController", mainController);

function mainController($scope) {
  $scope.showDiv = false;
}
