# 🅰️ AngularJS Basic Course Summary

![AngularJS](https://img.shields.io/badge/Framework-AngularJS-red?logo=angularjs&style=flat-square) ![Version](https://img.shields.io/badge/Version-1.x-lightgrey?style=flat-square) ![HTML](https://img.shields.io/badge/Language-HTML-orange?logo=html5&style=flat-square) ![CSS](https://img.shields.io/badge/Styling-CSS-blue?logo=css3&style=flat-square) ![JavaScript](https://img.shields.io/badge/Scripting-JavaScript-yellow?logo=javascript&style=flat-square) ![Bootstrap](https://img.shields.io/badge/Library-Bootstrap-purple?logo=bootstrap&style=flat-square)
![Completed AngularJS Course](https://img.shields.io/badge/Course-Completed-brightgreen?style=for-the-badge&logo=angularjs)

---

## 📚 Course Details

- 👩‍🏫 **Instructor:** Nisha Singla
- 🎬 **Platform:** YouTube
- 🧠 **Level:** Beginner
- 🎯 **Topics Covered:** AngularJS fundamentals, directives, filters, controllers, routing, and more.

---

## 🧩 Modules Overview

Each tutorial focuses on a key concept of AngularJS with easy-to-follow demos and explanations:

---

### 📘 Tutorial 1: Introduction

Get a bird's-eye view of what AngularJS is, its history, and why it was revolutionary for SPAs (Single Page Applications).

> 💡 **AngularJS** is a structural JavaScript framework for dynamic web apps developed by Google.

---

### 🖐️ Tutorial 2: Hello World

Your first AngularJS app using `ng-app` and `{{}}` expressions.

- ✨ `ng-app`: Bootstraps the Angular app.
- ✨ `{{ expression }}`: Used for binding data to the view.

---

### 🔧 Tutorial 3: Directives

Directives are special HTML attributes that extend behavior.

- `ng-model`, `ng-bind`, `ng-init`, etc.
- Help add dynamic behavior to static HTML.

---

### 🔁 Tutorial 4 & 10: ng-Repeat

Used to loop over arrays or collections.

```html
<li ng-repeat="item in items">{{item.name}}</li>
```

---

### 👁️ Tutorial 5: ng-show & ng-hide

Conditionally display elements based on boolean expressions.

```html
<div ng-show="isVisible">Visible Content</div>
```

---

### 📦 Tutorial 6: Modules

AngularJS apps are built in modules. Modules help structure your code.

```js
var app = angular.module("myApp", []);
```

---

### 🧠 Tutorial 7: Controllers

Controllers manage application data and logic.

```js
app.controller("MyCtrl", function ($scope) {
  $scope.name = "Aaditya";
});
```

---

### 🔄 Tutorial 8: Two-Way Data Binding

Changes in the model update the view, and vice versa — automatically.

---

### 🖼️ Tutorial 9: ng-src

Used to bind dynamic image URLs without loading them prematurely.

```html
<img ng-src="{{user.profilePic}}" />
```

---

### 🧠 Tutorial 11: ng-if

Used to conditionally render DOM elements.

```html
<p ng-if="isLoggedIn">Welcome back!</p>
```

---

## 🔍 Filters (Tutorials 12–17)

### 🧼 Tutorial 12: Built-in Filters

- `filter`, `uppercase`, `lowercase`, `currency`, `date`

### 🔢 Tutorial 13: limitTo

Limit how many characters/items to display.

```html
{{ name | limitTo:5 }}
```

### 🔍 Tutorial 14: Search Filter

Filter lists based on user input.

```html
<input ng-model="searchTerm" />
<li ng-repeat="user in users | filter:searchTerm">{{user.name}}</li>
```

### 🔃 Tutorial 15: Sorting

Sort lists using `orderBy`.

```html
<tr ng-repeat="user in users | orderBy:'name'"></tr>
```

### 🧙 Tutorial 16 & 17: Custom Filters

Write your own filter functions.

```js
app.filter("capitalize", function () {
  return function (input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});
```

---

## 🧭 Routing & Navigation (Tutorials 18–22)

### 🧩 Tutorial 18: Nested Controllers

Controllers inside controllers – scope inheritance explained.

### 📛 Tutorial 20: Controller As Syntax

An alternative to `$scope`, using `this`.

### 🧭 Tutorial 21: Routing with `ngRoute`

Create SPAs with route-based navigation.

```js
$routeProvider.when("/home", {
  templateUrl: "home.html",
  controller: "HomeCtrl",
});
```

### 🗺️ Tutorial 22: \$routeParams

Capture values from the URL, like IDs or usernames.

```js
$routeParams.id; // Get dynamic route param
```

---

## 🎨 Tutorial 23: Custom Directives

Build reusable components with isolated scope.

```js
app.directive("customCard", function () {
  return {
    template: '<div class="card">...</div>',
  };
});
```

---
