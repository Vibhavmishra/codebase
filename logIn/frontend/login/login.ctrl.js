/**
 * Created by Vibhav on 2/9/2016.
 */
angular.module("loginApp").controller("LoginCtrl", function ($scope, $window) {

    $scope.user = {
        email: "",
        password: "",
        rememberMe: false
    };
    $scope.login = function () {
        console.log("Login Pressed");
    }

});