angular.module('app.login', [])
  .controller('loginCtrl', function($scope, $state, $ionicHistory) {
    $scope.login = {};
    // Login
    $scope.doLogin = function() {
      Parse.User.logIn($scope.login.username, $scope.login.password, {
        success: function(user) {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('home');
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    };
  })
