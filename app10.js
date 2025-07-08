var app = angular.module("myApp", []);

app.controller("mainController", mainController);

function mainController($scope) {
  $scope.users = [
    {
      id: 1,
      name: "Peter",
      gender: "Male",
      dob: new Date("05-06-1990"),
      salary: 880000,
      city : "New York",
    },
    {
      id: 2,
      name: "Sommi",
      gender: "Female",
      dob: new Date("01-12-1991"),
      salary: 950000,
      city : "Los Angeles",
    },
    {
      id: 3,
      name: "Matthew",
      gender: "Male",
      dob: new Date("05-08-1990"),
      salary: 890000,
      city : "San Francisco",
    },
    {
      id: 4,
      name: "Ross",
      gender: "Male",
      dob: new Date("08-06-1990"),
      salary: 1000000,
      city : "San Francisco",
    },
    {
      id: 5,
      name: "Chandler",
      gender: "Male",
      dob: new Date("05-11-1990"),
      salary: 880000,
      city : "New York",
    },
    {
      id: 6,
      name: "Joey",
      gender: "Male",
      dob: new Date("05-09-1990"),
      salary: 895000,
      city : "Washington",
    },
  ];
}
