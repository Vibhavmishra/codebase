/**
 * Created by Vibhav on 2/8/2016.
 */
angular.module("loginApp").controller("SignupCtrl", function ($scope, $window) {

    $scope.user = {
        fName: "",
        lName: "",
        email: "",
        password: "",
        cPassword: "",
        dob: "",
        rememberMe: false
    };
    $scope.signup = function () {
        var user = $scope.user;
        if (user.cPassword === user.password) {

            $window.alert(JSON.stringify($scope.user))
        }
        else {
            $window.alert("password not matching plz retry")
        }

    }

});
