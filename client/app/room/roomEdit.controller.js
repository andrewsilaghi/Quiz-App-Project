'use strict';

angular.module('catalogApp')
    .controller('RoomEditCtrl', function($scope, $http, Auth, $routeParams) {

        $scope.room;
        $scope.questions;

        $http.get('/api/rooms/' + $routeParams.id).success(function(data) {
            $scope.room = data;
        });

        $http.get('/api/questions/').success(function(data) {
            $scope.questions = data;            
        });

        $scope.deleteQuestion = function(question) {
            $http.delete('/api/questions/' + question._id).success(function() {
                console.log('Sters');

                angular.forEach($scope.questions, function(r, i) {
                    if (r === question) {
                        $scope.questions.splice(i, 1);
                    }
                });

            }).error(function(err) {
                console.log('Nu s-a sters ptr ca' + err)
            });
        }


        $scope.addQuestion = function() {
            $http.post('/api/questions/', {
                name: $scope.questionTitle,
                room: $routeParams.id,
                answer1: $scope.questionAnswer1,
                answer2: $scope.questionAnswer2,
                answer3: $scope.questionAnswer3,
                answer4: $scope.questionAnswer4,
                correct: $scope.correctQuestion
            }).success(function() {
                console.log('Postat question')
            }).error(function(err) {
                console.log('Eroare ptr ca ' + err);
            });
        }

    });
