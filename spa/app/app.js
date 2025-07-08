var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/views/home.html",
      controller: "homeController",
    })
    .when("/about", {
      templateUrl: "app/views/about.html",
      controller: "aboutController",
    })
    .when("/services", {
      templateUrl: "app/views/services.html",
      controller: "servicesController",
    })
    .when("/gallery", {
      templateUrl: "app/views/gallery.html",
      controller: "galleryController",
    })
    .when("/contact", {
      templateUrl: "app/views/contact.html",
      controller: "contactController",
    })
    .when("/profile/:id", {
      templateUrl: "app/views/profile.html",
      controller: "profileController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
