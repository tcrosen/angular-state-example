angular.module('myApp.controllers').controller('UserController', ['$scope', '$state', 'UserService',
    function($scope, $state, UserService) {
        $scope.users = UserService.get();

        $scope.$on('refreshUsers', function(e, users) {
            $scope.users = users;
        });

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $scope.isSearching = $state.includes('user.search');
        });
    }
]);