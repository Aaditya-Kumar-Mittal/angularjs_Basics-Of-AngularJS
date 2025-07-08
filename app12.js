var app = angular.module("myApp", []);

app.controller("mainController", mainController);

app.filter("idFilter", idFilter);

// Custom filter to return users with id > 2
function idFilter() {
  return function (input, record) {
    var output = [];

    if (record == undefined || record == null || record == "" || record > input.length) {
      return input;
    }

    angular.forEach(input, function (value) {
      if (value.id >= record) {
        output.push(value);
      }
    });

    return output; // ✅ FIX: Return the filtered output
  };
}

// Controller definition
function mainController($scope) {
  $scope.users = [
    {
      id: 1,
      name: "Peter",
      gender: "Male",
      dob: new Date("1990-05-06"),
      salary: 880000,
      city: "New York",
    },
    {
      id: 2,
      name: "Sommi",
      gender: "Female",
      dob: new Date("1991-12-01"),
      salary: 950000,
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Matthew",
      gender: "Male",
      dob: new Date("1990-08-05"),
      salary: 890000,
      city: "San Francisco",
    },
    {
      id: 4,
      name: "Ross",
      gender: "Male",
      dob: new Date("1990-06-08"),
      salary: 1000000,
      city: "San Francisco",
    },
    {
      id: 5,
      name: "Chandler",
      gender: "Male",
      dob: new Date("1990-11-05"),
      salary: 880000,
      city: "New York",
    },
    {
      id: 6,
      name: "Joey",
      gender: "Male",
      dob: new Date("1990-09-05"),
      salary: 895000,
      city: "Washington",
    },
  ];
}
