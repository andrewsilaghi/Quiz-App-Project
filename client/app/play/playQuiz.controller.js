'use strict';

angular.module('catalogApp')
    .controller('PlayQuizCtrl', function($scope, $http, $location, $routeParams) {


    $scope.chooseAnswer = function(questionID, raspunsUser) {
      var raspunsCorrect = $scope.questions.filter(function(question) { return question._id == questionID;    })[0].correct;
      if(raspunsCorrect == raspunsUser) {
        alert("CORECT!");
      } else {
        alert("INCORECT!");
      }
    };

        $scope.questions;
        $scope.routeParam = $routeParams.id;

        $http.get('/api/questions').success(function(data) {
            $scope.questions = data;
          console.log($scope.questions);
          //cine e name? pai name ii intrebarea. unde apare asta? in api
          var raspunsCorect = data.filter(function(question) { return question._id == name.id;    })[0].correct;

          console.log(raspunsCorect);
        }).error(function(err) {
            console.log(err);
        })

  });
