(function () {
    'use strict';

    var userApp = angular.module('user', ['ui.router', 'userSearch', 'userList', 'services'])

    userApp.controller('userController', function ($scope, userService) {

    });

} ());