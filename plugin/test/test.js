(function(angular) {
    'use strict';
  var myApp = angular.module('spicyApp1', []);
  
  myApp.controller('SpicyController', ['$scope', function($scope) {
      $scope.spice = 'very';
  
      $scope.chiliSpicy = function() {
          $scope.spice = 'chili';
      };
  
      $scope.jalapenoSpicy = function() {
          $scope.spice = 'jalapeño';
      };
  }]);
  })(window.angular);
  
  /*
  Copyright 2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */