'use strict';

// define our module
var clickboxesApp = angular.module('clickboxesApp', []);

// Define the `TilesController` controller on our module
clickboxesApp.controller('ClickboxesController', function ClickboxesController($scope) {
  $scope.boxes = [
    {
      id: 0,
      value: true
    }, {
      id: 1,
      value: false
    }, {
      id: 2,
      value: false
    }, {
      id: 3,
      value: true
    }
  ];
});
