(function () {
    'use strict';

    var userSearchApp = angular.module('userSearch', ['ui.router', 'services'])

    userSearchApp.controller('userSearchController', function ($scope, $rootScope, userService) {

        $scope.searchString = "";

        $scope.searchStringChanged = function () {
            $rootScope.$broadcast("searchStringChanged", $scope.searchString);
        }

    });

} ());