var myProject = angular.module("myProject", []);

myProject.controller("myController",function($scope){
    console.log("In myController..");

    $scope.newUser ={};

    $scope.users = [
        {Username:"y",	Email:"y@gmail.com", Address:"ycity", Dob:1/10/2010, Company:"y infotech",
        Username:"b",	Email:"b@gmail.com",Address:"bcity", Dob:2/12/2010, Company:"b infotech",
       Username:"n",	Email:"n@gmail.com",Address:"ncity", Dob:8/5/2000, Company:"n infotech"}	
    ];

    $scope.saveUser = function(){
        console.log($scope.newUser);

        $scope.users.push($scope.newUse);
        $scope.newUser ={};
    };
    $scope.selectUser =function(user){
        console.log();
        $scope.clickedUser = user;
    };

    $scope.updateUser = function(){

    };

    $scope.deleteUser = function(){
     $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
    };
});