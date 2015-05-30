'use strict';

angular.module('catalogApp')
    .controller('RoomCtrl', function($scope, $location, $http, Auth) {

        $scope.name;
        $scope.rooms;

        $http.get('/api/rooms').success(function(rooms) {
            $scope.rooms = rooms;
        }).error(function(err) {
            console.log('nu am putut salva din cauza ' + err);
        });

        $scope.deleteRoom = function(room) {
            $http.delete('/api/rooms/' + room._id).success(function() {
                console.log('Sters');

                angular.forEach($scope.rooms, function(r, i) {
                    if (r === room) {
                        $scope.rooms.splice(i, 1);
                    }
                });

            }).error(function(err) {
                console.log('Nu s-a sters ptr ca' + err)
            });
        }

        $scope.createRoom = function() {

            $http.post('/api/rooms', {
                name: $scope.name,
                author: Auth.getCurrentUser()._id
            }).success(function(room) {
                $location.path('/room/' + room._id);
            }).error(function(err) {
                console.log(err);
            });
        }

    });
