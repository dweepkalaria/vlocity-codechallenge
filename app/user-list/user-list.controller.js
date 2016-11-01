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
            $scope.search = { name: searchString };
        })

        $scope.userSelected = function (user) {
            $scope.selectedUser = user;
        }

        $scope.isSelectedUser = function (user) {
            return ($scope.selectedUser && user && user.name === $scope.selectedUser.name);
        }

        // If user is navigating to perticular user path directly, highlight that user 
        $scope.userName = $stateParams.userName;
        if ($scope.userName) {
            $scope.userSelected({ name: $scope.userName });
        }

    });

} ());