var app = angular.module("myApp", []);

app.directive("userPanel", function () {
  return {
    template: "<h1>My Custom Directive</h1>",
  };
});
