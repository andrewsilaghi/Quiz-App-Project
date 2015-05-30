'use strict';

angular.module('catalogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room', {
        templateUrl: 'app/room/room.html',
        controller: 'RoomCtrl'
      })
      .when('/room/:id', {
      	templateUrl: 'app/room/roomEdit.html',
      	controller: 'RoomEditCtrl'
      });
  });
