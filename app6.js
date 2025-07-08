var myapp = angular
  .module("myApplication", [])
  .controller("moviesController", moviesController);

// function moviesController($scope) {
//   $scope.imageUrl = "./images/image1.jpg";
// }

function moviesController($scope) {
  $scope.images = [
    { name: "image1", url: "./images/image1.jpg" },
    { name: "image3", url: "./images/image3.jpg" },
    { name: "image4", url: "./images/image4.jpg" },
    { name: "image5", url: "./images/image5.jpg" },
  ];
}
