(function () {
    'use strict';

    angular.module('vlocityUsers', [
        'ui.router',
        'user',
        'userSearch',
        'userList',
        'userDetail',
        'services'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/users');

            $stateProvider
                .state('users', {
                    url: '/users',
                    params: {
                        userName: null,
                    },
                    views: {
                        '': {
                            templateUrl: 'user/user.template.html',
                            controller: 'userController'
                        },
                        'search@users': {
                            templateUrl: 'user-search/user-search.template.html',
                            controller: 'userSearchController'
                        },
                        'list@users': {
                            templateUrl: 'user-list/user-list.template.html',
                            controller: 'userListController'
                        }
                    }
                })
                .state('users.detail', {
                    url: '/:userName',
                    templateUrl: 'user-detail/user-detail.template.html',
                    controller: 'userDetailController'
                })

        });

} ());