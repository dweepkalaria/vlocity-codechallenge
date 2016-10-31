(function () {
    'use strict';

    var userDetailApp = angular.module('userDetail', ['ui.router', 'services'])

    userDetailApp.controller('userDetailController', function ($scope, $stateParams, userService) {

        $scope.userName = $stateParams.userName;

        if ($scope.userName) {
            var promise = userService.getUserDetailByName($scope.userName);
            promise.then(function (result) {
                $scope.user = result;
            }, function (reason) {
                console.log(reason);
            });
        }

        $scope.getRating = function (num) {
            return new Array(num);
        }

        $scope.getLikeArray = function (likes, dislikes) {
            if (likes && dislikes) {
                var length = (likes.length > dislikes.length) ? likes.length : dislikes.length;
                return new Array(length);
            }
        }

    });

} ());