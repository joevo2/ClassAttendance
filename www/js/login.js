angular.module('app.login', [])
.controller('loginCtrl', function($scope) {
    $scope.login = {};
    // Login 
    $scope.doLogin = function() {
        console.log($scope.login);
    };
})

