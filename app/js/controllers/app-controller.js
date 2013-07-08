angular.module('myApp.controllers').controller('AppController', ['$scope', '$state',
    function($scope, $state) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
           $scope.title = $state.current.name;
        });
    }
]);