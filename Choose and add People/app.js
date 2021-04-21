let app = angular.module("TossThemApp", []);
app.controller("MovePeopleController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"pic":"images/1.jpg", "name":"Sarkodie"},
        {"pic":"images/2.jpg", "name":"Stonebwoy"},
        {"pic":"images/3.jpg", "name":"ShattaWale"},
        {"pic":"images/4.jpg", "name":"Efya"},
        {"pic":"images/5.jpg", "name":"Eno"},
        {"pic":"images/6.jpg", "name":"Adina"},
        {"pic":"images/7.jpg", "name":"Gyakie"},
        {"pic":"images/8.jpg", "name":"Sister Afia"},
    ];  
   
}); 