angular.module('myApp.controllers').controller('UserDetailsController', ['$scope', '$state', '$stateParams', 'UserService',
    function($scope, $state, $stateParams, UserService) {
        $scope.user = UserService.getSingle($stateParams.id);
    }
]);