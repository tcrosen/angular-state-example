
angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);
angular.module('myApp.services', []);

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.compat']).
    config(['$stateProvider', '$routeProvider', '$urlRouterProvider',
        function ($stateProvider, $routeProvider, $urlRouterProvider) {

        'use strict';

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'views/about/about.html',
                controller: 'AboutController'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'views/user/user.html',
                controller: 'UserController'
            })
            .state('user.details', {
                url: '/:id/details',
                templateUrl: 'views/user/user.details.html',
                controller: 'UserDetailsController'
            })
            // .state('user.list', {
            //     url: '/list',
            //     templateUrl: 'views/user/user.list.html',
            //     controller: 'UserListController'
            // })
            .state('user.search', {
                url: '/search',
                templateUrl: 'views/user/user.search.html',
                controller: 'UserSearchController'
            });
    }
]);
