'use strict';

angular.module('catalogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/play', {
        templateUrl: 'app/play/play.html',
        controller: 'PlayCtrl'
      })
      .when('/play/:id',{
      	templateUrl: 'app/play/playQuiz.html',
      	controller: 'PlayQuizCtrl'
      });
  });
