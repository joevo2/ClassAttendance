angular.module('app.login', [])
  .controller('loginCtrl', function($rootScope, $scope, $state, $ionicHistory) {
    $scope.login = {};
    // Login
    $scope.doLogin = function() {
      Parse.User.logIn($scope.login.username, $scope.login.password, {
        success: function(user) {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          if (user.get('accountType') === 'Admin') {
            $state.go('admin');
          }
          else {
            $state.go('home');
          }
          delete $scope.login;
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    };
  })
