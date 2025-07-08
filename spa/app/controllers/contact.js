app.controller("contactController", function ($scope) {
  $scope.title = "Contact Page";

  $scope.users = [
    { id: 1, name: "A", age: 20 },
    { id: 2, name: "B", age: 30 },
    { id: 3, name: "C", age: 40 },
    { id: 4, name: "D", age: 50 },
  ];
});
