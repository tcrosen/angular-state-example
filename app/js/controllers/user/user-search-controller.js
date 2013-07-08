angular.module('myApp.controllers').controller('UserSearchController', ['$scope', '$state', 'UserService',
    function($scope, $state, UserService) {
        $scope.$watch('query', function(newVal, oldVal) {
            if (!angular.equals(newVal, oldVal)) {
                var users = UserService.search(newVal);
                $scope.$emit('refreshUsers', users);
            }
        });
    }
]);