'use strict';

angular.module('App.register',['ngRoute'])

.config({'$routeProvider': function($routeProvider) {
    $routeProvider.when('/register',{
        templateUrl: 'register/Signup.html',
        controller:'RegisterCtrl'
    });
}})
.value('clientId','a12345654321y')

.controller('RegisterCtrl',['$scope','$http',function ($scope, $http, $routeProvider) {
    console.log("Enter RegisterCtrl");

    var svc = $scope.nodejs_svc_url ="/registeruser";

    $scope.user ={};
    $scope.userRegistered =false;
    $scope.inputType ='password';

    $scope.registerUser = function (user) {
        console.log("Enter registerUser");
        console.log("user.username = "+user.username);
        $scope.master = angular.copy(user);

        console.log("calling svc="+svc);
        console.log("input user ="+JSON.stringify(user));

        $http({
            url:svc,
            method:'Post',
            data:user,
            headers:{'Content-Type':'application/json:Charset-utf-8'}
        }).success(function (data, status, header, config) {
            console.log("Http Status:"+status);
            console.log("Successfull call to:"+svc);
            console.log("data:"+JSON.stringify({data:data}));
            $scope.userRegistered =data;
            console.log("userRegistered:"+$scope.userRegistered);
        }).error(function (data, status, header, config) {
            console.log("Http Status:"+status)
            
        })
        
    }
}])