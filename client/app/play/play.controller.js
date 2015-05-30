'use strict';

angular.module('catalogApp')
    .controller('PlayCtrl', function($scope, $http, $location) {

        $scope.playQuiz = function() {
            $location.path('/play/' + $scope.roomId);
        }

    });
