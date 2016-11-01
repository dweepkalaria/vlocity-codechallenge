(function () {
    'use strict';

    var userListApp = angular.module('userList', ['ui.router', 'userDetail', 'services'])

    userListApp.controller('userListController', function ($scope, $stateParams, userService) {

        var promise = userService.getUsers();
        promise.then(function (result) {
            $scope.users = result;
        }, function (failureReason) {
            console.log(reason);
        });

        // Get search string from search module.
        $scope.$on("searchStringChanged", function (event, searchString) {
            $scope.searchString = searchString;
        })

        $scope.userSelected = function (user) {
            $scope.selectedUser = user;
        }

        $scope.userName = $stateParams.userName;

        $scope.isSelectedUser = function (user) {
            return ($scope.selectedUser && user && user.name === $scope.selectedUser.name);
        }

    });

} ());